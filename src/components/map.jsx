import * as React from "react";
import mapboxgl from "mapbox-gl";
import { find as lFind } from "lodash";
import _ from "lodash";
import STOPS_MAP from "../utils/stops.json";

import { getRoutesGeojson, getStopsGeoJson } from "../utils";
import {
  BUS_DATA,
  MAP_STYLE_HIGHLIGHTED_ROUTE,
  MAP_STYLE_ROUTE,
  MAP_STYLE_STOP,
  MAPBOX_TOKEN,
  STOPS_DATA,
} from "../utils/constants";
import { withTranslation, Trans } from "react-i18next";

mapboxgl.accessToken = MAPBOX_TOKEN;

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lat: STOPS_DATA.majestic.loc[0],
      lng: STOPS_DATA.majestic.loc[1],
      zoom: 11,
      supported: mapboxgl.supported(),
    };
    this.mapContainer = React.createRef();
  }

  initMap = () => {
    const { mapRef } = this.props;
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

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    mapRef.current = map;
    // this.map = map;
  };

  componentDidMount() {
    const { mapRef } = this.props;
    if (this.state.supported) {
      this.initMap();
      mapRef.current?.on("load", () => {
        this.renderMapData();
        this.addMapEvents();
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      userLocation,
      inputLocation,
      selectedBus,
      selectedStop,
      selectedTab,
      mapRef,
    } = this.props;
    const {
      userLocation: prevUserLocation,
      selectedBus: prevSelectedBus,
      selectedStop: prevSelectedStop,
      selectedTab: prevSelectedTab,
      inputLocation: prevInputLocation,
    } = prevProps;

    if (!this.state.supported) {
      return;
    }

    if (prevSelectedTab !== selectedTab) {
      this.callFnIfMapLoaded(this.refreshMapData);
    }

    if (!this.userLocationMarker) {
      this.initLocationMarkers();
    }

    if (userLocation && !prevUserLocation) {
      const el = document.createElement("div");
      el.className = "location-indicator";

      this.userLocationMarker.setLngLat(userLocation);
    }

    if (inputLocation && !prevInputLocation) {
      const el = document.createElement("div");
      el.className = "input-location-indicator";

      this.inputLocationMarker.setLngLat(inputLocation);
      this.callFnIfMapLoaded(this.centerMapOnInput);
    }

    if (selectedBus !== prevSelectedBus) {
      this.callFnIfMapLoaded(() => {
        mapRef.current.setFilter("routes-highlighted", [
          "==",
          "name",
          selectedBus || "",
        ]);

        // this.map.setFilter("highlighted-bus", ["==", "name", selectedBus || ""]);

        // TODO: Remove repetition below
        if (selectedBus && mapRef.current.getLayer("stops")) {
          const busesList = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;
          const busDetails = lFind(busesList, { name: selectedBus });
          mapRef.current.setFilter("stops", [
            "==",
            "name",
            selectedTab === "ta" ? busDetails.start.name : busDetails.end.name,
          ]);
        } else {
          mapRef.current.setFilter("stops", true);
        }
      });
    }

    if (selectedStop !== prevSelectedStop) {
      if (selectedStop && mapRef.current.getLayer("routes")) {
        const busesList = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;
        const filteredRoutes = _.filter(busesList, (b) => {
          const stops = [...STOPS_MAP[b.routename].stops, b.start, b.end];
          return _.some(stops, (s) => s.name === selectedStop);
        });
        const filteredStartPoints = _.map(filteredRoutes, (f) => {
          if (selectedTab === "ta") {
            return f.start;
          } else {
            return f.end;
          }
        });
        mapRef.current.setFilter("routes", [
          "in",
          "name",
          ..._.map(filteredRoutes, "name"),
        ]);
        mapRef.current.setFilter("stops", [
          "in",
          "name",
          ..._.map(filteredStartPoints, "name"),
        ]);
      } else {
        mapRef.current.setFilter("routes", true);
        if (selectedBus && mapRef.current.getLayer("stops")) {
          const busesList = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;
          const busDetails = lFind(busesList, { name: selectedBus });
          mapRef.current.setFilter("stops", [
            "==",
            "name",
            selectedTab === "ta" ? busDetails.start.name : busDetails.end.name,
          ]);
        } else {
          mapRef.current.setFilter("stops", true);
        }
      }
    }
  }

  centerMapOnInput = () => {
    const { inputLocation, mapRef } = this.props;
    mapRef.current.flyTo({
      center: [inputLocation.lng, inputLocation.lat],
      zoom: 12,
      pitch: 0,
      bearing: 0,
      duration: 500,
      essential: true,
    });
  };

  callFnIfMapLoaded = (fn) => {
    const { mapRef } = this.props;
    if (mapRef.current._loaded) {
      fn();
    } else {
      mapRef.current.on("load", fn);
    }
  };

  componentWillUnmount() {
    const { mapRef } = this.props;
    if (mapRef.current) {
      if (mapRef.current.getLayer("routes")) {
        mapRef.current.removeLayer("routes");
        mapRef.current.removeLayer("routes-highlighted");
        mapRef.current.removeSource("routes");
        mapRef.current.removeLayer("stops");
        mapRef.current.removeSource("stops");
      }
      mapRef.current.remove();
    }
  }

  renderMapData = () => {
    const {
      busData,
      selectedBus,
      selectedTab,
      userLocation,
      inputLocation,
      mapRef,
    } = this.props;

    this.callFnIfMapLoaded(() => {
      mapRef.current.addSource("routes", getRoutesGeojson(busData));
      mapRef.current.addLayer({
        id: "routes",
        source: "routes",
        ...MAP_STYLE_ROUTE,
      });

      mapRef.current.addLayer({
        id: "routes-highlighted",
        source: "routes",
        ...MAP_STYLE_HIGHLIGHTED_ROUTE,
        filter: ["==", "name", selectedBus || ""],
      });

      mapRef.current.addSource("stops", getStopsGeoJson(busData, selectedTab));

      mapRef.current.addLayer({
        id: "stops",
        source: "stops",
        ...MAP_STYLE_STOP,
        filter: true,
      });

      this.initLocationMarkers();
    });

    if (userLocation) {
      this.userLocationMarker.setLngLat(userLocation);
    }

    if (inputLocation) {
      this.inputLocationMarker.setLngLat(inputLocation);
      this.centerMapOnInput();
    }
  };

  initLocationMarkers = () => {
    const { mapRef } = this.props;
    // Show user location on the map
    const el = document.createElement("div");
    el.className = "user-location-indicator";
    this.userLocationMarker = new mapboxgl.Marker(el)
      .setLngLat({ lat: 0, lng: 0 })
      .addTo(mapRef.current);

    // Show input location on the map
    const el2 = document.createElement("div");
    el2.className = "input-location-indicator";
    this.inputLocationMarker = new mapboxgl.Marker(el2)
      .setLngLat({ lat: 0, lng: 0 })
      .addTo(mapRef.current);
  };

  addMapEvents = () => {
    const { mapRef } = this.props;
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    // Show bus stop name on hovering on the circle
    mapRef.current.on("mouseenter", "stops", (e) => {
      mapRef.current.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.name;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(mapRef.current);
    });

    mapRef.current.on("click", "stops", (e) => {
      const { setSelectedStop } = this.props;
      const feature = e.features[0];

      const { name } = feature.properties;
      setSelectedStop(name);
    });

    mapRef.current.on("mouseleave", "stops", () => {
      mapRef.current.getCanvas().style.cursor = "";
      popup.remove();
    });

    // Show route as blue on hover
    mapRef.current.on("mouseenter", "routes", (e) => {
      const { selectedBus } = this.props;
      mapRef.current.getCanvas().style.cursor = "pointer";

      const feature = e.features[0];

      const { name } = feature.properties;
      mapRef.current.setFilter("routes-highlighted", [
        "==",
        "name",
        name || selectedBus || "",
      ]);
    });

    mapRef.current.on("click", "routes", (e) => {
      const { setSelectedBus } = this.props;
      const feature = e.features[0];

      const { name } = feature.properties;
      setSelectedBus(name);
    });

    mapRef.current.on("mouseleave", "routes", () => {
      const { selectedBus } = this.props;
      mapRef.current.getCanvas().style.cursor = "";
      mapRef.current.setFilter("routes-highlighted", [
        "==",
        "name",
        selectedBus || "",
      ]);
    });
  };

  refreshMapData = () => {
    const { busData, selectedTab, mapRef } = this.props;

    const routeSource = mapRef.current.getSource("routes");
    const stopsSource = mapRef.current.getSource("stops");
    routeSource.setData(getRoutesGeojson(busData).data);
    stopsSource.setData(getStopsGeoJson(busData, selectedTab).data);
  };

  render() {
    const { t } = this.props;
    const { supported } = this.state;
    if (!supported) {
      return (
        <div className="center padding" id="error-page">
          <Trans t={t} i18nKey="deviceMapSupport" />
          <br />
          <Trans t={t} i18nKey="ensureUpToDate" />
        </div>
      );
    }
    return <div id="map" ref={this.mapContainer} className="map-container" />;
  }
}

export default withTranslation()(Map);
