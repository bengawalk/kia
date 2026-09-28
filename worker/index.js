/*
  Proxies the Google Maps APIs used by the frontend so the API key stays server side.
  Responses are normalized and cached at the edge to cut down on repeated Google calls.
  Everything outside /api/* is served from static assets (see run_worker_first in wrangler.jsonc).
*/

// Cache durations in seconds
const AUTOCOMPLETE_TTL = 60 * 60 * 24; // 1 day
const PLACE_TTL = 60 * 60 * 24 * 7; // 7 days
const REVERSE_GEOCODE_TTL = 60 * 60 * 24 * 7; // 7 days

// Same bias rectangle the app used with the Maps JS API.
// South west: somewhere near Bidadi. North east: above Hoskote and the airport.
const BENGALURU_BOUNDS = {
  low: { latitude: 12.789201188889859, longitude: 77.39869888194104 },
  high: { latitude: 13.230422232290332, longitude: 77.78540557324757 },
};

// Loose box around the city for validating reverse geocode inputs
const REVERSE_GEOCODE_BOUNDS = {
  minLat: 12.3,
  maxLat: 13.7,
  minLng: 77.0,
  maxLng: 78.2,
};

const PLACES_API = "https://places.googleapis.com/v1";
const GEOCODE_API = "https://maps.googleapis.com/maps/api/geocode/json";

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const jsonResponse = (data, { status = 200, maxAge = 0 } = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": maxAge > 0 ? `public, max-age=${maxAge}` : "no-store",
    },
  });

const googleFetch = async (url, init) => {
  const response = await fetch(url, init);
  if (!response.ok) {
    const body = await response.text();
    console.error(`Google API error ${response.status} for ${url}: ${body}`);
    throw new HttpError(502, "Upstream request failed");
  }
  return response.json();
};

const autocomplete = (params, env) => {
  const input = (params.get("input") || "").trim().replace(/\s+/g, " ");
  if (input.length < 2 || input.length > 100) {
    throw new HttpError(400, "input must be between 2 and 100 characters");
  }
  const sessionToken = params.get("session");

  return {
    cacheParams: { input: input.toLowerCase() },
    maxAge: AUTOCOMPLETE_TTL,
    load: async () => {
      const data = await googleFetch(`${PLACES_API}/places:autocomplete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": env.GOOGLE_MAPS_API_KEY,
        },
        body: JSON.stringify({
          input,
          locationBias: { rectangle: BENGALURU_BOUNDS },
          includedRegionCodes: ["in"],
          ...(sessionToken ? { sessionToken } : {}),
        }),
      });
      return {
        suggestions: (data.suggestions || [])
          .filter((s) => s.placePrediction)
          .map(({ placePrediction: p }) => ({
            placeId: p.placeId,
            mainText: p.structuredFormat?.mainText?.text || p.text?.text || "",
            secondaryText: p.structuredFormat?.secondaryText?.text || "",
          })),
      };
    },
  };
};

const placeDetails = (params, env) => {
  const id = params.get("id") || "";
  if (!/^[A-Za-z0-9_-]{1,300}$/.test(id)) {
    throw new HttpError(400, "Invalid place id");
  }
  const sessionToken = params.get("session");

  return {
    cacheParams: { id },
    maxAge: PLACE_TTL,
    load: async () => {
      const url = new URL(`${PLACES_API}/places/${id}`);
      if (sessionToken) {
        url.searchParams.set("sessionToken", sessionToken);
      }
      const data = await googleFetch(url, {
        headers: {
          "X-Goog-Api-Key": env.GOOGLE_MAPS_API_KEY,
          "X-Goog-FieldMask": "id,displayName,location",
        },
      });
      return {
        placeId: data.id,
        name: data.displayName?.text || "",
        lat: data.location.latitude,
        lng: data.location.longitude,
      };
    },
  };
};

const reverseGeocode = (params, env) => {
  const lat = Number.parseFloat(params.get("lat"));
  const lng = Number.parseFloat(params.get("lng"));
  const { minLat, maxLat, minLng, maxLng } = REVERSE_GEOCODE_BOUNDS;
  if (
    !Number.isFinite(lat) ||
    !Number.isFinite(lng) ||
    lat < minLat ||
    lat > maxLat ||
    lng < minLng ||
    lng > maxLng
  ) {
    throw new HttpError(400, "lat/lng missing or outside Bengaluru");
  }
  // ~11m precision. Nearby points share a cache entry
  const roundedLat = lat.toFixed(4);
  const roundedLng = lng.toFixed(4);

  return {
    cacheParams: { lat: roundedLat, lng: roundedLng },
    maxAge: REVERSE_GEOCODE_TTL,
    load: async () => {
      const url = new URL(GEOCODE_API);
      url.searchParams.set("latlng", `${roundedLat},${roundedLng}`);
      url.searchParams.set("key", env.GOOGLE_MAPS_API_KEY);
      const data = await googleFetch(url);
      if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
        console.error(
          `Geocoding API status ${data.status}: ${data.error_message}`,
        );
        throw new HttpError(502, "Upstream request failed");
      }
      const [result] = data.results || [];
      return {
        placeId: result?.place_id || null,
        name: result?.formatted_address || null,
      };
    },
  };
};

const HANDLERS = {
  "/api/autocomplete": autocomplete,
  "/api/place": placeDetails,
  "/api/reverse-geocode": reverseGeocode,
};

const handleApi = async (request, env, ctx) => {
  const url = new URL(request.url);
  const handler = HANDLERS[url.pathname];
  if (!handler) {
    throw new HttpError(404, "Not found");
  }
  if (request.method !== "GET") {
    throw new HttpError(405, "Method not allowed");
  }

  const { cacheParams, maxAge, load } = handler(url.searchParams, env);

  // Cache key only has the normalized params. Session tokens and other noise are left out
  const cacheUrl = new URL(`${url.origin}/__cache${url.pathname}`);
  Object.entries(cacheParams).forEach(([k, v]) =>
    cacheUrl.searchParams.set(k, v),
  );
  const cacheKey = new Request(cacheUrl.toString(), { method: "GET" });
  const cache = caches.default;

  const cached = await cache.match(cacheKey);
  if (cached) {
    const response = new Response(cached.body, cached);
    response.headers.set("X-Kia-Cache", "HIT");
    return response;
  }

  // Only cache misses cost a Google call, so only those are rate limited
  if (env.API_RATE_LIMITER) {
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const { success } = await env.API_RATE_LIMITER.limit({ key: ip });
    if (!success) {
      throw new HttpError(429, "Too many requests");
    }
  }

  const response = jsonResponse(await load(), { maxAge });
  ctx.waitUntil(cache.put(cacheKey, response.clone()));
  response.headers.set("X-Kia-Cache", "MISS");
  return response;
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) {
      return env.ASSETS.fetch(request);
    }
    try {
      return await handleApi(request, env, ctx);
    } catch (e) {
      if (e instanceof HttpError) {
        return jsonResponse({ error: e.message }, { status: e.status });
      }
      console.error(e);
      return jsonResponse({ error: "Internal error" }, { status: 500 });
    }
  },
};
