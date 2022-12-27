import * as React from "react";
import mapboxgl from 'mapbox-gl';
import {getRoutesGeojson, getStopsGeoJson} from "../utils";
import {MAP_STYLE_HIGHLIGHTED_ROUTE, MAP_STYPE_ROUTE, MAP_STYPE_STOP} from "../utils/constants";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: 77.57475793027761,
      lat: 12.97724955890747,
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
    const { location, selectedBus, selectedTab } = this.props;
    const { location: prevLocation, selectedBus: prevSelectedBus, selectedTab: prevSelectedTab } = prevProps;

    if(prevSelectedTab !== selectedTab) {
      this.refreshMapData();
    }

    if(location && !prevLocation) {
      const el = document.createElement('div');
      el.className = 'location-indicator';

      this.locationMarker = new mapboxgl.Marker(el)
        .setLngLat(location)
        .addTo(this.map);
    }
    if(selectedBus !== prevSelectedBus) {
      this.map.setFilter('routes-highlighted', [
        '==',
        'name',
        selectedBus || '',
      ]);
    }
  }

  renderMapData = () => {
    const {
      busData,
      selectedBus,
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

    this.map.addSource("stops", getStopsGeoJson(busData));

    this.map.addLayer({
      'id': 'stops',
      'source': 'stops',
      ...MAP_STYPE_STOP,
    });
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
      busData
    } = this.props;

    const routeSource = this.map.getSource('routes');
    const stopsSource = this.map.getSource('stops');
    routeSource.setData(getRoutesGeojson(busData));
    stopsSource.setData(getStopsGeoJson(busData));
  }

  render() {
    return (
      <div id="map" ref={this.mapContainer} className="map-container" />
    );
  }
}

export default Map;
