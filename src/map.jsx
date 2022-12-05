import * as React from "react";
import mapboxgl from 'mapbox-gl';
import polyline from "google-polyline";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhZGVlcCIsImEiOiJjbDliYW1wZzUwczJtM29xdHpzcnEyMjFpIn0.t_6sNxBfaIvu6C5XqjT5ww';

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

  componentDidMount() {
    const {
      busData,
      selectedTab,
    } = this.props;
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', () => {
      busData.map(b => {
        const routeName = `route-${selectedTab}-${b.name}`;
        map.addSource(routeName, {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates':
                polyline.decode(decodeURIComponent(b.route)),
            }
          }
        });
        map.addLayer({
          'id': routeName,
          'type': 'line',
          'source': routeName,
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#aaaaaa',
            'line-width': 4
          }
        });
      })
    });

    // 038cfc

    this.map = map;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { location, selectedBus, selectedTab } = this.props;
    const { location: prevLocation, selectedBus: prevSelectedBus, selectedTab: prevSelectedTab } = prevProps;
    if(location && !prevLocation) {

      const el = document.createElement('div');
      el.className = 'location-indicator';

      this.locationMarker = new mapboxgl.Marker(el)
        .setLngLat(location)
        .addTo(this.map);
    }
    if(selectedBus !== prevSelectedBus) {
      if(prevSelectedBus) {
        const prevLayerName = `route-${prevSelectedTab}-${prevSelectedBus}`;
        const prevLayer = this.map.getLayer(prevLayerName);
        this.map.setPaintProperty(prevLayer.id, 'line-color', "#aaaaaa");
      }

      if(selectedBus) {
        const currentLayerName = `route-${selectedTab}-${selectedBus}`;
        const currentLayer = this.map.getLayer(currentLayerName);
        this.map.moveLayer(currentLayer.id);
        this.map.setPaintProperty(currentLayer.id, 'line-color', "#038cfc");
      }
    }
  }

  render() {
    return (
      <div id="map" ref={this.mapContainer} className="map-container" />
    );
  }
}

export default Map;
