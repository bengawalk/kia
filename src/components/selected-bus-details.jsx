import _ from "lodash";
import maplibregl from "maplibre-gl";
import React from "react";
import { Trans, withTranslation } from "react-i18next";
import IconArrowBack from "../assets/icon-arrow-back";
import IconBusSide from "../assets/icon-bus-side-blue.svg";
import { ALL_BUSES_TIMINGS, getIntermediateStopsGeoJson } from "../utils";
import { MAP_STYLE_INTERMEDIATE_STOP, STOPS_DATA } from "../utils/constants";
import ALL_BUSES_STOPS from "../utils/stops.json";
import BusDetailsStop from "./bus-details-stop";

class SelectedBusDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTimeIndex: null,
    };
    this.uniqueName = this.getUniqueName(props.selectedBus, props.toAirport);
  }

  getUniqueName(selectedBus, toAirport) {
    const direction = toAirport ? "up" : "down";
    return `${selectedBus}_${direction}_intermediate_stops`;
  }

  componentDidMount() {
    this.addLayerAndEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    // If bus or direction changes, update map layer
    if (
      prevProps.selectedBus !== this.props.selectedBus ||
      prevProps.toAirport !== this.props.toAirport
    ) {
      this.removeLayerAndEvents();
      this.uniqueName = this.getUniqueName(
        this.props.selectedBus,
        this.props.toAirport,
      );
      this.addLayerAndEvents();
    }
    // If stops change, update map layer
    if (prevProps.selectedTabData !== this.props.selectedTabData) {
      this.removeLayerAndEvents();
      this.addLayerAndEvents();
    }
    // If selected bus is no longer in tab data, reset
    if (
      prevProps.selectedTabData !== this.props.selectedTabData ||
      prevProps.selectedBus !== this.props.selectedBus
    ) {
      if (
        !_.find(this.props.selectedTabData, { name: this.props.selectedBus })
      ) {
        this.props.setSelectedBus(null);
      }
    }
  }

  componentWillUnmount() {
    this.removeLayerAndEvents();
  }

  addLayerAndEvents = () => {
    const { mapRef, selectedBus, toAirport, selectedTabData } = this.props;
    const currentRef = mapRef.current;
    if (!currentRef) return;
    const busDetails = _.find(selectedTabData, { name: selectedBus });
    if (!busDetails) return;
    const { routename } = busDetails;
    const { stops } = ALL_BUSES_STOPS[routename];
    const uniqueName = this.uniqueName;
    const callFnIfMapLoaded = (fn) => {
      if (mapRef.current._loaded) {
        fn();
      } else {
        mapRef.current.on("load", fn);
      }
    };
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    const showPopup = (e) => {
      currentRef.getCanvas().style.cursor = "pointer";
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.name;
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(mapRef.current);
    };
    const onStopClick = (e) => {
      const feature = e.features[0];
      const { name } = feature.properties;
      this.props.setSelectedStop(name);
    };
    const hidePopup = () => {
      currentRef.getCanvas().style.cursor = "";
      popup.remove();
    };
    const addLayerAndEvents = () => {
      currentRef.addSource(uniqueName, getIntermediateStopsGeoJson(stops));
      currentRef.addLayer({
        id: uniqueName,
        source: uniqueName,
        ...MAP_STYLE_INTERMEDIATE_STOP,
      });
      currentRef.on("mouseenter", uniqueName, showPopup);
      mapRef.current.on("click", uniqueName, onStopClick);
      currentRef.on("mouseleave", uniqueName, hidePopup);
    };
    callFnIfMapLoaded(addLayerAndEvents);
    this._popup = popup;
    this._showPopup = showPopup;
    this._onStopClick = onStopClick;
    this._hidePopup = hidePopup;
  };

  removeLayerAndEvents = () => {
    const { mapRef } = this.props;
    const currentRef = mapRef.current;
    if (!currentRef) return;
    const uniqueName = this.uniqueName;
    if (this._showPopup)
      currentRef.off("mouseenter", uniqueName, this._showPopup);
    if (this._onStopClick)
      currentRef.off("click", uniqueName, this._onStopClick);
    if (this._hidePopup)
      currentRef.off("mouseleave", uniqueName, this._hidePopup);
    try {
      if (currentRef._canvas) {
        if (currentRef.getLayer(uniqueName)) {
          currentRef.removeLayer(uniqueName);
        }
        if (currentRef.getSource(uniqueName)) {
          currentRef.removeSource(uniqueName);
        }
      }
    } catch (error) {
      // ignore
    }
  };

  setSelectedTimeIndex = (idx) => {
    this.setState({ selectedTimeIndex: idx });
  };

  render() {
    const {
      setSelectedBus,
      selectedBus,
      setSelectedStop,
      currentTime,
      selectedTabData,
      toAirport,
      t,
    } = this.props;
    const { selectedTimeIndex } = this.state;
    const busDetails = _.find(selectedTabData, { name: selectedBus });
    if (!busDetails) {
      return null;
    }
    const { name, start, end, routename } = busDetails;
    const timingsData = ALL_BUSES_TIMINGS[routename];
    const { stops, totalDistance } = ALL_BUSES_STOPS[routename];
    const fromText = toAirport ? start.name : STOPS_DATA.airport.name;
    const toText = toAirport ? STOPS_DATA.airport.name : end.name;
    return (
      <>
        <button className="sel-bus-back" onClick={() => setSelectedBus(null)}>
          <IconArrowBack fill={"#666666"} />
          Back to all buses
        </button>
        <div className="sel-bus-title">
          <img src={IconBusSide} alt="" />
          <span className="sel-but-title-name">{name}</span>
        </div>
        <div className="sel-bus-from-to">
          <span className="text-light">
            <Trans t={t} i18nKey="from" />
          </span>{" "}
          <Trans t={t} i18nKey={fromText} />
          <br />
          <span className="text-light">
            <Trans t={t} i18nKey="to" />
          </span>{" "}
          <Trans t={t} i18nKey={toText} />
        </div>
        <h3 className="mb-2 sel-bus-stops-heading">
          <Trans t={t} i18nKey="Stops on route" />
        </h3>
        <div id="sel-bus-stops-list-container">
          <BusDetailsStop
            stopDetails={{
              distance: 0,
              loc: start.loc,
              name: fromText,
              name_kn: fromText,
            }}
            setSelectedStop={setSelectedStop}
            totalDistance={totalDistance}
            timingsData={timingsData}
            currentTime={currentTime}
            selectedTimeIndex={selectedTimeIndex}
            setSelectedTimeIndex={this.setSelectedTimeIndex}
          />
          {stops.map((s) => (
            <BusDetailsStop
              key={s.name}
              stopDetails={s}
              setSelectedStop={setSelectedStop}
              totalDistance={totalDistance}
              timingsData={timingsData}
              currentTime={currentTime}
              selectedTimeIndex={selectedTimeIndex}
              setSelectedTimeIndex={this.setSelectedTimeIndex}
            />
          ))}
          <BusDetailsStop
            stopDetails={{
              distance: totalDistance,
              loc: end.loc,
              name: toText,
              name_kn: toText,
            }}
            setSelectedStop={setSelectedStop}
            totalDistance={totalDistance}
            timingsData={timingsData}
            currentTime={currentTime}
            selectedTimeIndex={selectedTimeIndex}
            setSelectedTimeIndex={this.setSelectedTimeIndex}
          />
        </div>
      </>
    );
  }
}

export default withTranslation()(SelectedBusDetails);
