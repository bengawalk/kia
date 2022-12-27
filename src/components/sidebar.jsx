import React from "react";
import classNames from "classnames";

import IconCall from "../assets/icon-call.svg";
import {HELPLINE_NUMBER, TABS} from "../utils/constants";
import {getCurrentMsm} from "../utils";
import BusItem from "./bus-item";

const COLLAPSED_HEIGHT = 120;

const getCoordinatesFromEvent = (e) => {
  let [x, y] = [0, 0];
  if(e.clientX) {
    x = e.clientX;
    y = e.clientY;
  } else if(e.touches) {
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
    this.secondInterval = null;
  }

  componentDidMount() {
    this.secondInterval = setInterval(() => {
      this.setState({
        currentTime: getCurrentMsm(),
      });
    }, 10000);
    window.addEventListener("mousemove", this.onPointerMove, {passive: true});
    window.addEventListener("touchmove", this.onPointerMove, {passive: true});
    window.addEventListener("mouseup", this.onPointerUp, {passive: true});
    window.addEventListener("touchend", this.onPointerUp, {passive: true});
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    clearInterval(this.secondInterval);
    window.removeEventListener("mousemove", this.onPointerMove, {passive: true});
    window.removeEventListener("touchmove", this.onPointerMove, {passive: true});
    window.removeEventListener("mouseup", this.onPointerUp, {passive: true});
    window.removeEventListener("touchend", this.onPointerUp, {passive: true});
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    this.setState(({ resized }) => ({ resized: resized + 1 }));
  }

  onPointerDown = (e) => {
    if(window.innerWidth > 999) {
      return;
    }
    const [x, y] = getCoordinatesFromEvent(e);
    this.setState({ x, y });
  }

  onPointerMove = (e) => {
    e.stopPropagation();
    if(this.state.x === null) {
      return;
    }
    const [x, y] = getCoordinatesFromEvent(e);
    this.setState(({ move }) => ({
      move: Math.max(move + y - this.state.y, -window.innerHeight + COLLAPSED_HEIGHT),
      y,
    }));
  }

  onPointerUp = () => {
    if(this.state.x === null) {
      return;
    }
    this.setState({
      x: null,
      y: null,
    });
      if(this.state.move < -200) {
        // Touch moved up by a significant value
        this.setState({
          move: -window.innerHeight + COLLAPSED_HEIGHT,
        });
      } else {
        // Touch moved up but not significant
        this.setState({
          move: 0,
        });
      }
  }
  render() {
    const { selectedTab, setSelectedTab, sortedTabData, selectedBus, setSelectedBus, suggestedBus, suggestedBusDetails } = this.props;
    const { currentTime, move } = this.state;
    return (
      <div
        id="sidebar"
        style={{
          top: `calc(100% - ${COLLAPSED_HEIGHT - move}px)`
        }}
        className={classNames({
          "sharp-corners": move < -200,
        })}
      >
        <div id="sidebar-drag-indicator" />
        <div id="sidebar-header"
             className="padding"
             onMouseDown={this.onPointerDown}
             onTouchStart={this.onPointerDown}
        >
          <div id="logo-banner" className="mb-4">
            <img src="/bmtc_logo.svg" alt="BMTC logo" id="bmtc-logo" />
            BMTC VAYU VAJRA
          </div>
          {/*<h1 className="mb-4">Bengaluru Airport Bus</h1>*/}
          <div className="tabs">
            {
              TABS.map(t => (
                <div key={t.id} className={`tab-item ${selectedTab === t.id ? "selected" : ""}`} onClick={() => setSelectedTab(t.id)}>
                  {
                    t.text
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div id="sidebar-content">
          {
            suggestedBus && (
              <>
                <h4 className="mb-4">
                  Suggested bus
                </h4>
                <BusItem
                  busDetails={suggestedBusDetails}
                  selectedBus={selectedBus}
                  setSelectedBus={setSelectedBus}
                  toAirport={selectedTab === "ta"}
                  currentTime={currentTime}
                />
              </>
            )
          }
          <h4 className="mb-4">
            {
              suggestedBus ? "Other Buses" : "Routes and Schedules"
            }
          </h4>
          {
            sortedTabData.map(bus => bus.name === suggestedBus ? null : (
              <BusItem
                key={bus.name}
                busDetails={bus}
                selectedBus={selectedBus}
                setSelectedBus={setSelectedBus}
                toAirport={selectedTab === "ta"}
                currentTime={currentTime}
              />
            ))
          }
        </div>
        <div className="padding text">
          <h4 className="mb-2">BMTC Vayu Vajra Helpline</h4>
          <a href={`tel:${HELPLINE_NUMBER}`} id="sidebar-tel">
            <img src={IconCall} alt="" />
            {HELPLINE_NUMBER}
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
