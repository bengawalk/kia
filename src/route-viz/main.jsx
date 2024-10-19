import * as React from "react";
import { createRoot } from "react-dom/client";
import { MAP_STYLE_ROUTE, MAPBOX_TOKEN, STOPS_DATA } from "../utils/constants";
import mapboxgl from "mapbox-gl";
import { getRoutesGeojson } from "../utils";

mapboxgl.accessToken = MAPBOX_TOKEN;

const getLineGeoJson = (points) => ({
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: (points || []).map((p) => [p.lng, p.lat]),
        },
      },
    ],
  },
});

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: STOPS_DATA.majestic.loc[0],
      lng: STOPS_DATA.majestic.loc[1],
      zoom: 11,
      points: [],
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    this.initMap();
    this.map.on("load", () => {
      this.map.addSource("route", getRoutesGeojson([]));
      this.map.addLayer({
        id: "route",
        source: "route",
        type: "line",
        paint: {
          "line-color": "#4264fb",
          "line-width": 8,
        },
      });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { points } = this.state;
    if (prevState.points !== points) {
      const routeSource = this.map.getSource("route");
      routeSource.setData(getLineGeoJson(points).data);
    }
  }

  componentWillUnmount() {
    if (this.map && this.map.getLayer("route")) {
      this.map.removeLayer("route");
    }
    if (this.map && this.map.getSource("route")) {
      this.map.removeSource("route");
    }
  }

  initMap = () => {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      minZoom: 10,
      maxZoom: 18,
    });
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    map.getCanvas().style.cursor = "crosshair";

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    map.on("click", (e) => {
      this.setState({
        points: [...this.state.points, e.lngLat],
      });
    });
    this.map = map;
  };

  render() {
    const { points } = this.state;
    return (
      <div id="route-viz-wrapper">
        <div id="route-viz-map" ref={this.mapContainer} />
        <div id="route-viz-info">
          <h3>Route</h3>
          {points.length === 0 ? (
            <p>Click on a point on the map to add to the route</p>
          ) : (
            <>
              <button>Copy</button>
              <div id="route-viz-points">
                {points.map((p, index) => (
                  <div key={index}>
                    {p.lng.toFixed(6)}, {p.lat.toFixed(6)}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Container />);
