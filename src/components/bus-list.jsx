import React from "react";
import { Trans, withTranslation } from "react-i18next";
import BusItem from "./bus-item";

const BusesList = ({
  highlightedSuggestion,
  suggestedBusDetails,
  setSelectedBus,
  selectedBus,
  selectedTab,
  currentTime,
  suggestedBus,
  sortedTabData,
  t,
}) => {
  return (
    <>
      {highlightedSuggestion && (
        <>
          <h4 className="mb-4">
            <Trans t={t} i18nKey="Suggested bus" />
          </h4>
          <BusItem
            busDetails={suggestedBusDetails}
            // highlighted={highlightedSuggestion}
            setSelectedBus={setSelectedBus}
            toAirport={selectedTab === "ta"}
            currentTime={currentTime}
          />
        </>
      )}
      <h4 className="mb-4">
        <Trans
          t={t}
          i18nKey={suggestedBus ? "All Buses" : "Routes and Schedules"}
        />
      </h4>
      {sortedTabData.map((bus) => (
        <BusItem
          key={bus.name}
          busDetails={bus}
          selectedBus={selectedBus}
          setSelectedBus={setSelectedBus}
          toAirport={selectedTab === "ta"}
          currentTime={currentTime}
        />
      ))}
    </>
  );
};

export default withTranslation()(BusesList);
