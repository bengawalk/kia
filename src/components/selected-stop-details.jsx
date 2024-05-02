import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
  each as lEach,
  includes as lIncludes,
  find as lFind,
  sortBy as lSortBy,
  reverse as lReverse,
  uniqBy as lUniqBy,
} from "lodash";
import BUS_STOPS_MAP from "../utils/stops.json";
import TIMINGS_MAP from "../utils/timings.json";
import {
  getHoursAndMinutes,
  getIntermediateStopsGeoJson,
  timeTextDisplay,
} from "../utils";
import IconArrowBack from "../assets/icon-arrow-back";

import IconBusStop from "../assets/icon-bus-stop.svg";
import IconSort from "../assets/icon-sort.svg";
import {
  BUS_DATA,
  MAP_STYLE_INTERMEDIATE_STOP,
  STOPS_DATA,
} from "../utils/constants";

const SelectedStopDetails = ({
  selectedBus,
  selectedStop,
  selectedTab,
  setSelectedStop,
  mapRef,
}) => {
  const DIRECTION = selectedTab === "ta" ? "UP" : "DOWN";

  const [sort, setSort] = useState("startTime");
  const [sortDirection, setSortDirection] = useState(1);
  const [directionSortedData, setDirectionSortedData] = useState([]);

  const uniqueName = `${selectedBus}_${DIRECTION}_selected_stop`;

  const onHeaderClick = (selectedSort) => {
    if (sort === selectedSort) {
      setSortDirection(sortDirection * -1);
    } else {
      setSort(selectedSort);
    }
  };

  useEffect(() => {
    const currentRef = mapRef.current;

    const addLayerAndEvents = () => {
      const ALL_STOPS = _.union(
        ..._.values(_.mapValues(BUS_STOPS_MAP, "stops")),
        _.values(STOPS_DATA),
      );
      currentRef.addSource(
        uniqueName,
        getIntermediateStopsGeoJson([
          _.find(ALL_STOPS, { name: selectedStop }),
        ]),
      );
      currentRef.addLayer({
        id: uniqueName,
        source: uniqueName,
        ...MAP_STYLE_INTERMEDIATE_STOP,
      });
    };

    if (currentRef._loaded) {
      addLayerAndEvents();
    } else {
      currentRef?.on("load", addLayerAndEvents);
    }

    return () => {
      if (!currentRef) {
        return;
      }

      // TODO: Figure out a better way for if check
      // When user opens details of a bus and clicks on search box, the map component is unmounted, and _canvas property is undefined.
      // In such cases getLayer and removeLayer throw error.
      // But when user opens details of a bus and clicks back to all buses, the layer needs to be removed.
      if (currentRef._canvas) {
        if (currentRef.getLayer(uniqueName)) {
          currentRef.removeLayer(uniqueName);
        }
        if (currentRef.getSource(uniqueName)) {
          currentRef.removeSource(uniqueName);
        }
      }
    };
  }, [mapRef.current]);

  useEffect(() => {
    const data = [];
    lEach(BUS_STOPS_MAP, ({ stops, totalDistance }, routeName) => {
      // Only consider routes in the currently selected directions
      // TODO: Cleanup the logic
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
        // Check if the bus has a stop with the selected stop name
        const matchingStop = lFind(stopsIncludingStart, { name: selectedStop });
        if (matchingStop) {
          // TODO: Some timings are repeated. Need to make uniq during the timings.json creation
          const BUS_TIMINGS = lUniqBy(
            TIMINGS_MAP[routeName],
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
    setDirectionSortedData(sortedData);
  }, [sort, sortDirection, selectedTab]);

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
            <th onClick={() => onHeaderClick("busName")}>
              <div
                className={`selected-stop-table-header ${sortDirection > 0 ? "" : "reverse"}`}
              >
                Bus
                {sort === "busName" && <img src={IconSort} alt="" />}
              </div>
            </th>
            <th onClick={() => onHeaderClick("startTime")}>
              <div
                className={`selected-stop-table-header ${sortDirection > 0 ? "" : "reverse"}`}
              >
                {DIRECTION === "UP" ? "Stop" : "Airport"} timing
                {sort === "startTime" && <img src={IconSort} alt="" />}
              </div>
            </th>
            <th onClick={() => onHeaderClick("endTime")}>
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
};

export default SelectedStopDetails;
