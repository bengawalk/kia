const fs = require("node:fs");
const path = require("node:path");
const _ = require("lodash");

const getBmtcData = () => {
  const bmtcDataText = fs.readFileSync(
    path.join(__dirname, "bmtc_api_data.csv"),
    "utf8",
  );
  const bmtcDataLines = bmtcDataText.split("\n");
  const kiaData = [];

  // First line is headers. Start with index 1
  for (let i = 1; i < bmtcDataLines.length; i++) {
    const [routeno, routeid, fromstationid, tostationid, parentrouteid] =
      bmtcDataLines[i].split(",");

    // Exclude empty lines
    if (routeno) {
      kiaData.push({
        routeno,
        routeid: _.toNumber(routeid),
        fromstationid: _.toNumber(fromstationid),
        tostationid: _.toNumber(tostationid),
        parentrouteid: _.toNumber(parentrouteid),
      });
    }
  }

  return kiaData;
};

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "en-US,en;q=0.5",
  deviceType: "WEB",
  Origin: "https://bmtcwebportal.amnex.com",
  Referer: "https://bmtcwebportal.amnex.com",
};

module.exports = {
  getBmtcData,
  DEFAULT_HEADERS,
};
