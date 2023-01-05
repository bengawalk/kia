import * as React from "react";
import mapboxgl from 'mapbox-gl';
import { find as lFind } from "lodash";

import {getRoutesGeojson, getStopsGeoJson} from "../utils";
import {
  BUS_DATA,
  MAP_STYLE_HIGHLIGHTED_ROUTE,
  MAP_STYPE_ROUTE,
  MAP_STYPE_STOP,
  STOPS_DATA,
  TABS
} from "../utils/constants";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lat: STOPS_DATA.majestic.loc[0],
      lng: STOPS_DATA.majestic.loc[1],
      zoom: 11
    };
    this.mapContainer = React.createRef();
  }

  initMap = () => {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      minZoom: 10,
      maxZoom: 18,
    });
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    this.map = map;
  }

  componentDidMount() {
    this.initMap();
    this.map.on('load', () => {
      this.renderMapData();
      this.addMapEvents();
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { userLocation, inputLocation, selectedBus, selectedTab } = this.props;
    const {
      userLocation: prevUserLocation,
      selectedBus: prevSelectedBus,
      selectedTab: prevSelectedTab,
      inputLocation: prevInputLocation,
    } = prevProps;

    if(prevSelectedTab !== selectedTab) {
      this.refreshMapData();
    }

    if(!this.userLocationMarker) {
      this.initLocationMarkers();
    }

    if(userLocation && !prevUserLocation) {
      const el = document.createElement('div');
      el.className = 'location-indicator';

      this.userLocationMarker.setLngLat(userLocation);
    }

    if(inputLocation && !prevInputLocation) {
      const el = document.createElement('div');
      el.className = 'input-location-indicator';

      this.inputLocationMarker.setLngLat(inputLocation);
    }

    if(selectedBus !== prevSelectedBus) {
      this.map.setFilter('routes-highlighted', [
        '==',
        'name',
        selectedBus || '',
      ]);

      if(selectedBus) {
        const busesList = selectedTab === 'ta' ? BUS_DATA.to : BUS_DATA.from
        const busDetails = lFind(busesList, { name: selectedBus });
        this.map.setFilter('stops', [
          '==',
          'name',
          selectedTab === 'ta' ? busDetails.start.name : busDetails.end.name,
        ]);
      } else {
        this.map.setFilter('stops', true);
      }
    }
  }

  renderMapData = () => {
    const {
      busData,
      selectedBus,
      selectedTab,
      userLocation,
      inputLocation,
    } = this.props;

    this.map.addSource("routes", getRoutesGeojson(busData));
    this.map.addLayer({
      'id': "routes",
      'source': "routes",
      ...MAP_STYPE_ROUTE
    });

    this.map.addLayer(
      {
        'id': 'routes-highlighted',
        'source': 'routes',
        ... MAP_STYLE_HIGHLIGHTED_ROUTE,
        filter: ['==', 'name', selectedBus || '']
      },
    );

    this.map.addSource("stops", getStopsGeoJson(busData, selectedTab));

    this.map.addLayer({
      'id': 'stops',
      'source': 'stops',
      ...MAP_STYPE_STOP,
      filter: true
    });

    this.initLocationMarkers();

    if(userLocation) {
      this.userLocationMarker.setLngLat(userLocation);
    }

    if(inputLocation) {
      this.inputLocationMarker.setLngLat(inputLocation);
    }
  }


  initLocationMarkers = () => {
    // Show user location on the map
    const el = document.createElement('div');
    el.className = 'user-location-indicator';
    this.userLocationMarker = new mapboxgl.Marker(el)
      .setLngLat({ lat: 0, lng: 0 })
      .addTo(this.map);

    // Show input location on the map
    const el2 = document.createElement('div');
    el2.className = 'input-location-indicator';
    this.inputLocationMarker = new mapboxgl.Marker(el2)
      .setLngLat({ lat: 0, lng: 0 })
      .addTo(this.map);
  }

  addMapEvents = () => {
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    // Show bus stop name on hovering on the circle
    this.map.on('mouseenter', 'stops', (e) => {
      this.map.getCanvas().style.cursor = 'pointer';

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.name;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(this.map);
    });

    this.map.on('mouseleave', 'stops', () => {
      this.map.getCanvas().style.cursor = '';
      popup.remove();
    });

    // Show route as blue on hover
    this.map.on('mouseenter', 'routes', (e) => {
      const { selectedBus } = this.props;
      this.map.getCanvas().style.cursor = 'pointer';

      const feature = e.features[0];

      const { name } = feature.properties;
      this.map.setFilter('routes-highlighted', [
        '==',
        'name',
        name || selectedBus || '',
      ]);
    });

    this.map.on('click', 'routes', (e) => {
      const { setSelectedBus } = this.props;
      const feature = e.features[0];

      const { name } = feature.properties;
      setSelectedBus(name);
    });

    this.map.on('mouseleave', 'routes', () => {
      const { selectedBus } = this.props;
      this.map.getCanvas().style.cursor = '';
      this.map.setFilter('routes-highlighted', [
        '==',
        'name',
        selectedBus || '',
      ]);
    });


  }

  refreshMapData = () => {
    const {
      busData,
      selectedTab,
    } = this.props;

    const routeSource = this.map.getSource('routes');
    const stopsSource = this.map.getSource('stops');
    routeSource.setData(getRoutesGeojson(busData).data);
    stopsSource.setData(getStopsGeoJson(busData, selectedTab).data);
  }

  render() {
    return (
      <div id="map" ref={this.mapContainer} className="map-container" />
    );
  }
}

export default Map;
