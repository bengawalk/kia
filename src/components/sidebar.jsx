import React from "react";
import classNames from "classnames";

import IconCall from "../assets/icon-call.svg";
import { HELPLINE_NUMBER, LANGUAGES, TABS } from "../utils/constants";
import { getCurrentMsm } from "../utils";
import BusItem from "./bus-item";
import { Trans, withTranslation } from "react-i18next";

const COLLAPSED_HEIGHT = 120;

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
      bodyHeight: null,
    };
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

    // Hand resize for bottom tray sizing
    const delta = bodyHeight ? newBodyHeight - bodyHeight : 0;
    this.setState({
      move: move < -400 ? move - delta : move,
    });

    // Handle change in selected buses to show and hide tray
    if (selectedBus && selectedBus !== prevSelectedBus) {
      const sidebarItem = document.querySelector(`.bus-${selectedBus}`);
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
    if (selectedBus !== prevSelectedBus && move !== -200) {
      this.setState({
        move: -200,
      });
    }
  }

  onPointerDown = (e) => {
    if (window.innerWidth > 999) {
      return;
    }
    const [x, y] = getCoordinatesFromEvent(e);
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
        -window.innerHeight + COLLAPSED_HEIGHT
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
    if (this.state.move < -300) {
      // Touch moved up by a significant value
      this.setState({
        move: -window.innerHeight + COLLAPSED_HEIGHT,
      });
    } else if (this.state.move < -100) {
      // Touch moved up by a significant value
      this.setState({
        move: -200,
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
      lang,
      selectedTab,
      setSelectedTab,
      sortedTabData,
      selectedBus,
      setSelectedBus,
      suggestedBus,
      suggestedBusDetails,
      setLang,
      t,
    } = this.props;
    const { currentTime, move } = this.state;
    return (
      <div
        id="sidebar"
        style={{
          top: `${bodyHeight - COLLAPSED_HEIGHT + move}px`,
          height: `${move < -400 ? -move + 120 : -move + 120 + 90}px`,
        }}
        className={classNames({
          "sharp-corners": move < -200,
        })}
      >
        <div id="sidebar-drag-indicator" />
        <div
          id="sidebar-header"
          className="padding"
          onMouseDown={this.onPointerDown}
          onTouchStart={this.onPointerDown}
        >
          <div id="logo-banner" className="mb-4">
            <img src="/bmtc_logo.svg" alt="BMTC logo" id="bmtc-logo" />
            <Trans t={t} i18nKey="BMTC VAYU VAJRA" />
          </div>
          <div className="tabs">
            {TABS.map((ta) => (
              <div
                key={ta.id}
                className={`tab-item ${
                  selectedTab === ta.id ? "selected" : ""
                }`}
                onClick={() => setSelectedTab(ta.id)}
              >
                <Trans t={t} i18nKey={ta.text} />
              </div>
            ))}
          </div>
        </div>
        <div id="sidebar-content">
          <div id="lang-sel">
            {LANGUAGES.map(({ code, text }) => (
              <button
                className={`lang-btn ${code} ${
                  lang === code ? "selected" : ""
                }`}
                key={code}
                onClick={() => setLang(code)}
              >
                {text}
              </button>
            ))}
          </div>
          {suggestedBus && (
            <>
              <h4 className="mb-4">
                <Trans t={t} i18nKey="Suggested bus" />
              </h4>
              <BusItem
                busDetails={suggestedBusDetails}
                selectedBus={selectedBus}
                setSelectedBus={setSelectedBus}
                toAirport={selectedTab === "ta"}
                currentTime={currentTime}
              />
            </>
          )}
          <h4 className="mb-4">
            <Trans
              t={t}
              i18nKey={suggestedBus ? "Other Buses" : "Routes and Schedules"}
            />
          </h4>
          {sortedTabData.map((bus) =>
            bus.name === suggestedBus ? null : (
              <BusItem
                key={bus.name}
                busDetails={bus}
                selectedBus={selectedBus}
                setSelectedBus={setSelectedBus}
                toAirport={selectedTab === "ta"}
                currentTime={currentTime}
              />
            )
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
