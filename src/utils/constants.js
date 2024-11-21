// import _ from "lodash";
// import polyline from "google-polyline";

export const TABS = [
  {
    text: "To airport",
    id: "ta",
  },
  {
    text: "From airport",
    id: "fa",
  },
];

export const LANGUAGES = [
  {
    code: "en",
    text: "English",
  },
  {
    code: "kn",
    text: "ಕನ್ನಡ",
  },
];

export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

export const BMTC_API_ENDPOINT = import.meta.env.VITE_BMTC_API_ENDPOINT;
export const CORS_ANYWHERE = import.meta.env.VITE_CORS_ANYWHERE;

export const HELPLINE_NUMBER = "77609 91269";

export const APP_SCREENS = {
  INITIAL: "INITIAL", // Screen with the map and list of buses. Default screen as soon as the app opens
  LOCATION_TEXT: "LOCATION_TEXT", // Search input for setting location
  LOCATION_MAP: "LOCATION_MAP", // Map screen to set the to/from location
};

export const LOCATION_STATES = {
  PENDING: "PENDING", // Initial state when the app opens and before requesting permission
  UNAVAILABLE: "UNAVAILABLE", // Device doesn't support getting the user's location
  DENIED: "DENIED", // User doesn't want to give location or accidentally clicks deny
  APPROVED: "APPROVED", // Successfully got user's permission
};

export const API_CALL_STATUSES = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const PHONE_CONTACTS = {
  jp_nagar: {
    text: "J P Nagar 5th phase",
    phone: "7760991265",
  },
  kempegowda: {
    text: "Kempegowda Bus Station",
    phone: "7760991170",
  },
  ecity: {
    text: "Electronic City(Infosys Main Gate)",
    phone: "7760991268",
  },
  hsr: {
    text: "H.S.R BDA Complex",
    phone: "7760991267",
  },
  mysore_road: {
    text: "Mysore road Satellite Bus Station",
    phone: "7760991262",
  },
  hal: {
    text: "H.A.L Main Gate",
    phone: "7760991264",
  },
  airport: {
    text: "International Airport",
    phone: "7760991269",
  },
  bmtc: {
    text: "BMTC helpline",
    phone: "1800 425 1663",
  },
};

export const STOPS_DATA = {
  majestic: {
    name: "Majestic Bus Stand",
    loc: [12.977529081680132, 77.57247169985196],
    contact: "7760991170",
  },
  silk_institute: {
    name: "Silk Institute Metro Station",
    loc: [12.862231132000229, 77.53020557184188],
    contact: "7760991267",
  },
  airport: {
    name: "Airport Bus Stand",
    loc: [13.199110535079635, 77.70822021568426],
    phone: "7760991269",
  },
  hal: {
    name: "HAL Main Gate",
    loc: [12.958498117866407, 77.66518619680876],
    contact: "7760991264",
  },
  hebbal: {
    name: "Hebbal Bus Depot",
    loc: [13.042313, 77.593773],
  },
  whitefield: {
    name: "Whitefield TTMC",
    loc: [12.976874051754933, 77.72680679219907],
    contact: "7760991125",
  },
  banashankari: {
    name: "Banashankari TTMC",
    loc: [12.917668361661741, 77.5729031044554],
  },
  kadugodi: {
    name: "Kadugodi Bus Stop",
    loc: [12.995682104394492, 77.75933511787484],
    contact: "7760991266",
  },
  hsr: {
    name: "HSR BDA Shopping Complex",
    loc: [12.912696250372736, 77.63815235881127],
  },
  hsr_keb: {
    name: "HSR KEB Bus stand",
    loc: [12.903498259883314, 77.64980288742859],
  },
  ecity: {
    name: "Electronic City Bus Stop",
    loc: [12.846820291920075, 77.67194606999932],
    contact: "7760991268",
  },
  btm: {
    name: "BTM Layout Kuvempu Nagar TTMC",
    loc: [12.916077213466505, 77.61613653753079],
  },
  chandapura: {
    name: "Chandapura Circle",
    loc: [12.802273131607688, 77.70456150337426],
  },
  sarjapur: {
    name: "Sarjapur Road Wipro Gate",
    loc: [12.910761671396754, 77.68409625549441],
  },
  ecity_wipro: {
    name: "Electronic City Wipro Gate Depot",
    loc: [12.836107341675932, 77.65779655065786],
  },
  mysore_road: {
    name: "Mysore Road Satellite Bus Stand",
    loc: [12.953555019494152, 77.54382623524201],
    contact: "7760991262",
  },
  royal_meenakshi: {
    name: "Royal Meenakshi Mall",
    loc: [12.876412761573464, 77.59560880964153],
  },
  kengeri: {
    name: "Kengeri Bus Terminal",
    loc: [12.913656066139644, 77.48714794975331],
  },
  beml_5: {
    name: "BEML Layout 5th Stage",
    loc: [12.906722494018258, 77.5216914426631],
  },
  brigade_meadows: {
    name: "Brigade meadows, Kanakapura road",
    loc: [12.813044601197065, 77.50773351136493],
  },
};

const TELEGRAM_GROUPS = {
  "4/4A": "https://t.me/+7ga4_hAxGUE2NWI1",
  "6/6A": "https://t.me/+KZpw98bVQP1hYTE9",
};

export const BUS_DATA = {
  to: [
    {
      name: "KIA-4",
      routename: "KIA-4 UP",
      start: STOPS_DATA.hal,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-4A",
      routename: "KIA-4A UP",
      start: STOPS_DATA.whitefield,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5",
      routename: "KIA-5 UP",
      start: STOPS_DATA.banashankari,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5D",
      routename: "KIA-5D UP",
      start: STOPS_DATA.brigade_meadows,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6",
      routename: "KIA-6 UP",
      start: STOPS_DATA.kadugodi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6A",
      routename: "KIA-6A UP",
      start: STOPS_DATA.kadugodi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7",
      routename: "KIA-7 UP",
      start: STOPS_DATA.hsr_keb,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7A",
      routename: "KIA-7A UP",
      start: STOPS_DATA.hsr,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8",
      routename: "KIA-8 UP",
      start: STOPS_DATA.ecity,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8A",
      routename: "KIA-8A UP",
      start: STOPS_DATA.btm,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8C",
      routename: "KIA-8C UP",
      start: STOPS_DATA.chandapura,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8D",
      routename: "KIA-8D UP",
      start: STOPS_DATA.sarjapur,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8E",
      routename: "KIA-8E UP",
      start: STOPS_DATA.ecity_wipro,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9",
      routename: "KIA-9 UP",
      start: STOPS_DATA.majestic,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9H",
      routename: "KIA-9H UP",
      start: STOPS_DATA.hebbal,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-10",
      routename: "KIA-10 UP",
      start: STOPS_DATA.mysore_road,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-14",
      routename: "KIA-14 UP",
      start: STOPS_DATA.royal_meenakshi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-15",
      routename: "KIA-15 UP",
      start: STOPS_DATA.whitefield,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-17",
      routename: "KIA-17 UP",
      start: STOPS_DATA.beml_5,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
  ],
  from: [
    {
      name: "KIA-4",
      routename: "KIA-4 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hal,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-4A",
      routename: "KIA-4A DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5",
      routename: "KIA-5 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.banashankari,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5D",
      routename: "KIA-5D DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.brigade_meadows,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6",
      routename: "KIA-6 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.kadugodi,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6A",
      routename: "KIA-6A DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.kadugodi,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7",
      routename: "KIA-7 DOWN",
      start: STOPS_DATA.hsr_keb,
      end: STOPS_DATA.hsr_keb,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7A",
      routename: "KIA-7A DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hsr,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8",
      routename: "KIA-8 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.ecity,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8A",
      routename: "KIA-8A DOWN",
      end: STOPS_DATA.btm,
      start: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8C",
      routename: "KIA-8C DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.chandapura,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8D",
      routename: "KIA-8D DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.sarjapur,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8E",
      routename: "KIA-8E DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.ecity_wipro,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9",
      routename: "KIA-9 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.majestic,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9H",
      routename: "KIA-9H DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hebbal,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-10",
      routename: "KIA-10 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.mysore_road,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-14",
      routename: "KIA-14 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.royal_meenakshi,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-15",
      routename: "KIA-15 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-15A",
      routename: "KIA-15A DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-17",
      routename: "KIA-17 DOWN",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.beml_5,
      stops: [],
      contact: "",
    },
  ],
};

const COLOR_HIGHLIGHT = "#4264fb";
const COLOR_MUTED = "#aaaaaa";

export const MAP_STYLE_VEHICLE = 
{
  type: 'symbol',
  layout: {
    'icon-image': 'live-bus',
    "icon-allow-overlap": true,
    "icon-size": 1
  }
}
// {
//   type: "circle",
//   paint: {
//     "circle-color": COLOR_MUTED,
//     "circle-radius": 5,
//     "circle-stroke-width": 3,
//     "circle-stroke-color": COLOR_HIGHLIGHT,
//   },
// };

export const MAP_STYLE_STOP = 
{
  type: 'symbol',
  layout: {
    'icon-image': 'bus-stop',
    // "icon-allow-overlap": true,
    "icon-size": 1
  }
}
// {
//   type: "circle",
//   paint: {
//     "circle-color": "#ffffff",
//     "circle-radius": 8,
//     "circle-stroke-width": 3,
//     "circle-stroke-color": COLOR_HIGHLIGHT,
//   },
// };

export const MAP_STYLE_INTERMEDIATE_STOP = 
{
  type: 'symbol',
  layout: {
    'icon-image': 'bus-stop',
    // "icon-allow-overlap": true,
    "icon-size": 1
  }
}
// {
//   type: "circle",
//   paint: {
//     "circle-color": "#ffffff",
//     "circle-radius": 6,
//     "circle-stroke-width": 2,
//     "circle-stroke-color": COLOR_HIGHLIGHT,
//   },
// };

export const MAP_STYLE_ROUTE = {
  type: "line",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": COLOR_MUTED,
    "line-width": {
      type: "exponential",
      base: 1,
      stops: [
        [10, 3],
        [14, 8],
        [18, 3],
      ],
    },
  },
};

export const MAP_STYLE_HIGHLIGHTED_ROUTE = {
  ...MAP_STYLE_ROUTE,
  paint: {
    ...MAP_STYLE_ROUTE.paint,
    "line-color": COLOR_HIGHLIGHT,
  },
};
