import React from "react";
import classNames from "classnames";
import _ from "lodash";

import IconTabArrow from "../assets/icon-tab-arrow.svg";
import IconCall from "../assets/icon-call.svg";
import { HELPLINE_NUMBER, TABS } from "../utils/constants";
import { getCurrentMsm } from "../utils";
import { Trans, withTranslation } from "react-i18next";
import BusesList from "./bus-list";
import SelectedBusDetails from "./selected-bus-details";
import SelectedStopDetails from "./selected-stop-details";

const COLLAPSED_HEIGHT = 55;
const FOOTER_HEIGHT = 90;
const MIDWAY_HEIGHT = 200;

const getCoordinatesFromEvent = (e) => {
  let [x, y] = [0, 0];
  if (e.clientX) {
    x = e.clientX;
    y = e.clientY;
  } else if (e.touches) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  }
  return [x, y];
};

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
      move: 0,
      currentTime: getCurrentMsm(),
      resized: 0,
    };
    this.mouseTime = 0;
    this.secondInterval = null;
  }

  componentDidMount() {
    this.secondInterval = setInterval(() => {
      this.setState({
        currentTime: getCurrentMsm(),
      });
    }, 10000);
    window.addEventListener("mousemove", this.onPointerMove, { passive: true });
    window.addEventListener("touchmove", this.onPointerMove, { passive: true });
    window.addEventListener("mouseup", this.onPointerUp, { passive: true });
    window.addEventListener("touchend", this.onPointerUp, { passive: true });
  }

  componentWillUnmount() {
    clearInterval(this.secondInterval);
    window.removeEventListener("mousemove", this.onPointerMove, {
      passive: true,
    });
    window.removeEventListener("touchmove", this.onPointerMove, {
      passive: true,
    });
    window.removeEventListener("mouseup", this.onPointerUp, { passive: true });
    window.removeEventListener("touchend", this.onPointerUp, { passive: true });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { selectedBus, bodyHeight: newBodyHeight } = this.props;
    const { selectedBus: prevSelectedBus, bodyHeight } = prevProps;
    const { move } = this.state;

    // Handle resize for bottom tray sizing
    const delta = bodyHeight ? newBodyHeight - bodyHeight : 0;
    this.setState({
      move: move < -(MIDWAY_HEIGHT + 200) ? move - delta : move,
    });

    // Handle change in selected buses to show and hide tray
    if (selectedBus && selectedBus !== prevSelectedBus) {
      const sidebarItem = document.querySelector(`.bus-${selectedBus}`);
      if (!sidebarItem) {
        // TODO: Figure out when this error occurs
        return;
      }
      const bounds = sidebarItem.getBoundingClientRect();
      if (
        bounds.top >= window.innerHeight + move &&
        bounds.top <= window.innerHeight - 100
      ) {
        // Already in the sidebar view
        // We don't scroll it if it's already in view since it might cause unintentional shift in layout
      } else {
        sidebarItem.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    if (selectedBus !== prevSelectedBus && move !== -MIDWAY_HEIGHT) {
      this.setState({
        move: -MIDWAY_HEIGHT,
      });
    }
  }

  onPointerDown = (e) => {
    if (window.innerWidth > 999) {
      return;
    }
    const [x, y] = getCoordinatesFromEvent(e);
    this.mouseTime = performance.now();
    this.setState({ x, y });
  };

  onPointerMove = (e) => {
    e.stopPropagation();
    if (this.state.x === null) {
      return;
    }
    const [x, y] = getCoordinatesFromEvent(e);
    this.setState(({ move }) => ({
      move: Math.max(
        move + y - this.state.y,
        -window.innerHeight + COLLAPSED_HEIGHT,
      ),
      y,
    }));
  };

  onPointerUp = () => {
    if (this.state.x === null) {
      return;
    }
    this.setState({
      x: null,
      y: null,
    });
    const timeDiff = performance.now() - this.mouseTime;
    if (timeDiff < 150 && this.state.move === 0) {
      // Short tap on the tray when it's closed
      this.setState({
        move: -MIDWAY_HEIGHT,
      });
      return;
    }
    if (this.state.move < -MIDWAY_HEIGHT - 100) {
      // Touch moved up by a significant value above the midway height
      this.setState({
        move: -window.innerHeight + COLLAPSED_HEIGHT,
      });
    } else if (this.state.move < -(MIDWAY_HEIGHT * 0.5)) {
      // Touch moved up by a significant value
      this.setState({
        move: -MIDWAY_HEIGHT,
      });
    } else {
      // Touch moved up but not significant
      this.setState({
        move: 0,
      });
    }
  };
  render() {
    const {
      bodyHeight,
      selectedTab,
      setSelectedTab,
      sortedTabData,
      selectedBus,
      selectedStop,
      setSelectedStop,
      highlightedSuggestion,
      setSelectedBus,
      suggestedBus,
      suggestedBusDetails,
      t,
      mapRef,
      liveBusData,
      setLiveBusData,
    } = this.props;
    const { currentTime, move } = this.state;
    return (
      <div
        id="sidebar"
        style={{
          top: `${bodyHeight - COLLAPSED_HEIGHT + move}px`,
          height: `${
            move < -(MIDWAY_HEIGHT + 200)
              ? -move + COLLAPSED_HEIGHT
              : -move + COLLAPSED_HEIGHT + FOOTER_HEIGHT
          }px`,
        }}
        className={classNames({
          "sharp-corners": move < -MIDWAY_HEIGHT,
        })}
      >
        <div id="sidebar-drag-indicator" />
        <div
          id="sidebar-header"
          className="padding"
          onMouseDown={this.onPointerDown}
          onTouchStart={this.onPointerDown}
        >
          <div id="logo-banner">
            <Trans t={t} i18nKey="BENGALURU AIRPORT BUS" />
            <div
              id="tab-selection"
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTab(selectedTab === "ta" ? "fa" : "ta");
              }}
            >
              <img
                src={IconTabArrow}
                id="tab-arrow"
                className={selectedTab}
                alt=""
              />
              <Trans t={t} i18nKey={_.find(TABS, { id: selectedTab }).text} />
            </div>
          </div>
        </div>
        <div id="sidebar-content" className="padding">
          {selectedStop && (
            <SelectedStopDetails
              key={selectedStop}
              selectedBus={selectedBus}
              selectedTab={selectedTab}
              selectedStop={selectedStop}
              setSelectedStop={setSelectedStop}
              mapRef={mapRef}
              liveBusData={liveBusData}
              setLiveBusData={setLiveBusData}
            />
          )}
          {!selectedStop && selectedBus && (
            <SelectedBusDetails
              setSelectedBus={setSelectedBus}
              selectedBus={selectedBus}
              setSelectedStop={setSelectedStop}
              currentTime={currentTime}
              selectedTabData={sortedTabData}
              toAirport={selectedTab === "ta"}
              mapRef={mapRef}
              liveBusData={liveBusData}
              setLiveBusData={setLiveBusData}
            />
          )}
          {!selectedStop && !selectedBus && (
            <BusesList
              highlightedSuggestion={highlightedSuggestion}
              suggestedBusDetails={suggestedBusDetails}
              setSelectedBus={setSelectedBus}
              selectedBus={selectedBus}
              selectedTab={selectedTab}
              currentTime={currentTime}
              suggestedBus={suggestedBus}
              sortedTabData={sortedTabData}
            />
          )}
        </div>
        <div className="padding text">
          <h4 className="mb-2">
            <Trans t={t} i18nKey="BMTC Vayu Vajra Helpline" />
          </h4>
          <a href={`tel:${HELPLINE_NUMBER}`} id="sidebar-tel">
            <img src={IconCall} alt="" />
            {HELPLINE_NUMBER}
          </a>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Sidebar);
