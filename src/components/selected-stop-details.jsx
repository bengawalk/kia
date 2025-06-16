import _, {
  each as lEach,
  find as lFind,
  includes as lIncludes,
  reverse as lReverse,
  sortBy as lSortBy,
  uniqBy as lUniqBy,
} from "lodash";
import React from "react";
import IconArrowBack from "../assets/icon-arrow-back";
import {
  ALL_BUSES_TIMINGS,
  getHoursAndMinutes,
  getIntermediateStopsGeoJson,
  timeTextDisplay,
} from "../utils";
import BUS_STOPS_MAP from "../utils/stops.json";

import IconBusStop from "../assets/icon-bus-stop.svg";
import IconSort from "../assets/icon-sort.svg";
import {
  BUS_DATA,
  MAP_STYLE_INTERMEDIATE_STOP,
  STOPS_DATA,
} from "../utils/constants";

class SelectedStopDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sort: "startTime",
      sortDirection: 1,
      directionSortedData: [],
    };
    this.uniqueName = `${props.selectedBus}_${props.selectedTab === "ta" ? "UP" : "DOWN"}_selected_stop`;
  }

  getDirection = () => {
    return this.props.selectedTab === "ta" ? "UP" : "DOWN";
  };

  onHeaderClick = (selectedSort) => {
    this.setState((prevState) => {
      if (prevState.sort === selectedSort) {
        return { sortDirection: prevState.sortDirection * -1 };
      } else {
        return { sort: selectedSort };
      }
    });
  };

  addLayerAndEvents = () => {
    const { mapRef, selectedStop } = this.props;
    const currentRef = mapRef.current;
    if (!currentRef) {
      return;
    }
    const ALL_STOPS = _.union(
      ..._.values(_.mapValues(BUS_STOPS_MAP, "stops")),
      _.values(STOPS_DATA),
    );
    if (!currentRef.getSource(this.uniqueName)) {
      currentRef.addSource(
        this.uniqueName,
        getIntermediateStopsGeoJson([
          _.find(ALL_STOPS, { name: selectedStop }),
        ]),
      );
    }
    currentRef.addLayer({
      id: this.uniqueName,
      source: this.uniqueName,
      ...MAP_STYLE_INTERMEDIATE_STOP,
    });
  };

  callFnIfMapLoaded = (fn) => {
    const { mapRef } = this.props;
    if (mapRef?.current?._loaded) {
      fn();
    } else {
      mapRef.current.on("load", fn);
    }
  };

  componentDidMount() {
    this.callFnIfMapLoaded(this.addLayerAndEvents);
    this.updateDirectionSortedData();
  }

  componentWillUnmount() {
    const { mapRef } = this.props;
    const currentRef = mapRef.current;
    if (!currentRef) {
      return;
    }
    try {
      if (currentRef._canvas) {
        if (currentRef.getLayer(this.uniqueName)) {
          currentRef.removeLayer(this.uniqueName);
        }
        if (currentRef.getSource(this.uniqueName)) {
          currentRef.removeSource(this.uniqueName);
        }
      }
    } catch (error) {
      console.error("Error removing layer and source", error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // If sort, sortDirection, or selectedTab changes, update data
    if (
      prevState.sort !== this.state.sort ||
      prevState.sortDirection !== this.state.sortDirection ||
      prevProps.selectedTab !== this.props.selectedTab
    ) {
      this.updateDirectionSortedData();
    }
    // If selectedBus changes, update map layer
    if (prevProps.selectedBus !== this.props.selectedBus) {
      this.callFnIfMapLoaded(this.addLayerAndEvents);
      // Remove previous layer/source
      const { mapRef } = this.props;
      if (mapRef?.current) {
        try {
          mapRef.current.removeLayer(this.uniqueName);
          mapRef.current.removeSource(this.uniqueName);
        } catch (e) {}
      }
      // Update uniqueName for new bus
      this.uniqueName = `${this.props.selectedBus}_${this.getDirection()}_selected_stop`;
    }
  }

  updateDirectionSortedData = () => {
    const { selectedTab, selectedStop, selectedBus } = this.props;
    const DIRECTION = this.getDirection();
    const { sort, sortDirection } = this.state;
    const data = [];
    lEach(BUS_STOPS_MAP, ({ stops, totalDistance }, routeName) => {
      if (lIncludes(routeName, DIRECTION)) {
        const BUS_NAME = routeName.split(" ")[0];
        const busData = lFind(
          DIRECTION === "UP" ? BUS_DATA.to : BUS_DATA.from,
          {
            routename: routeName,
          },
        );
        let lastStopData = {};
        if (busData) {
          if (DIRECTION === "UP") {
            lastStopData = {
              distance: 0,
              name: busData.start.name,
            };
          } else {
            lastStopData = {
              distance: totalDistance,
              name: busData.end.name,
            };
          }
        }
        const stopsIncludingStart = [...stops, lastStopData];
        const matchingStop = lFind(stopsIncludingStart, { name: selectedStop });
        if (matchingStop) {
          const BUS_TIMINGS = lUniqBy(
            ALL_BUSES_TIMINGS[routeName],
            (t) => `${t.start},${t.duration}`,
          );
          const { distance } = matchingStop;
          lEach(BUS_TIMINGS, ({ duration, start }) => {
            const stopMinutesFromStart = Math.floor(
              (duration * distance) / totalDistance,
            );
            if (DIRECTION === "UP") {
              data.push({
                busName: BUS_NAME,
                startTime: start + stopMinutesFromStart,
                journeyMinutes: duration - stopMinutesFromStart,
                endTime: start + duration,
              });
            } else {
              data.push({
                busName: BUS_NAME,
                startTime: start,
                journeyMinutes: stopMinutesFromStart,
                endTime: start + stopMinutesFromStart,
              });
            }
          });
        }
      }
    });
    const sortedData = lSortBy(data, [sort]);
    if (sortDirection < 0) {
      lReverse(sortedData);
    }
    this.setState({ directionSortedData: sortedData });
  };

  render() {
    const { selectedBus, selectedStop, setSelectedStop, selectedTab, mapRef } =
      this.props;
    const { sort, sortDirection, directionSortedData } = this.state;
    const DIRECTION = this.getDirection();
    return (
      <>
        <button className="sel-bus-back" onClick={() => setSelectedStop(null)}>
          <IconArrowBack fill={"#666666"} />
          Back to {selectedBus || "all buses"}
        </button>
        <h3 id="selected-stop-heading">
          <img src={IconBusStop} alt="" />
          {selectedStop}
        </h3>
        <table id="bus-stop-timings-table" cellSpacing={0}>
          <thead>
            <tr>
              <th onClick={() => this.onHeaderClick("busName")}>
                <div
                  className={`selected-stop-table-header ${sortDirection > 0 ? "" : "reverse"}`}
                >
                  Bus
                  {sort === "busName" && <img src={IconSort} alt="" />}
                </div>
              </th>
              <th onClick={() => this.onHeaderClick("startTime")}>
                <div
                  className={`selected-stop-table-header ${sortDirection > 0 ? "" : "reverse"}`}
                >
                  {DIRECTION === "UP" ? "Stop" : "Airport"} timing
                  {sort === "startTime" && <img src={IconSort} alt="" />}
                </div>
              </th>
              <th onClick={() => this.onHeaderClick("endTime")}>
                <div
                  className={`selected-stop-table-header ${sortDirection > 0 ? "" : "reverse"}`}
                >
                  Reach {DIRECTION === "UP" ? "airport" : "stop"}
                  {sort === "endTime" && <img src={IconSort} alt="" />}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {directionSortedData.map(({ busName, startTime, endTime }) => {
              const startFormat = getHoursAndMinutes(startTime);
              const endFormat = getHoursAndMinutes(endTime);
              return (
                <tr key={`${busName}-${startTime}`}>
                  <td>{busName}</td>
                  <td>
                    {timeTextDisplay(startFormat.hours)}:
                    {timeTextDisplay(startFormat.minutes)}
                  </td>
                  <td>
                    {timeTextDisplay(endFormat.hours)}:
                    {timeTextDisplay(endFormat.minutes)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default SelectedStopDetails;
