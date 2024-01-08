const fs = require("node:fs");
const path = require("node:path");
const axios = require("axios");
const _ = require("lodash");
const jsonStringify = require("fast-json-stable-stringify");
const { getBmtcData, DEFAULT_HEADERS } = require("./utils");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

/**
 * We need to swap some timings
 * because the API returns inverted timings
 * for UP and DOWN for some routes.
 *
 * @param {{
 *  [key: string]: number[]
 * }} timings
 */
const swapTimings = (timings) => {
  const swaps = [
    ["KIA-7 UP", "KIA-7 DOWN"],
    ["KIA-14 UP", "KIA-14 DOWN"],
  ];

  swaps.forEach(([a, b]) => {
    const temp = timings[a];
    timings[a] = timings[b];
    timings[b] = temp;

    console.log("Swapped timings for", a, "and", b, "routes");
  });
};

try {
  const checkTimings = async () => {
    const timings = {};
    const kiaData = getBmtcData();

    // Check for tomorrow, not today
    const currentDate = new Date(Date.now() + 86400000);

    for (let i = 0; i < kiaData.length; i++) {
      const { routeno, routeid, fromstationid, tostationid } = kiaData[i];

      const { data } = await axios.post(
        `${process.env.BMTC_API_ENDPOINT}/GetTimetableByRouteId_v2`,
        {
          routeid,
          fromStationId: fromstationid,
          toStationId: tostationid,
          current_date: currentDate.toISOString(),
        },
        {
          headers: DEFAULT_HEADERS,
        },
      );
      const timingsArray = _.map(data.data[0]?.tripdetails, (timeItem) => {
        const { starttime, endtime } = timeItem;
        const [hoursStart, minutesStart] = _.split(starttime, ":");
        const [hoursEnd, minutesEnd] = _.split(endtime, ":");
        const startMinutes =
          _.toNumber(hoursStart) * 60 + _.toNumber(minutesStart);
        const endMinutes = _.toNumber(hoursEnd) * 60 + _.toNumber(minutesEnd);
        return {
          start: startMinutes,
          duration: endMinutes - startMinutes,
        };
      });
      timings[routeno] = _.sortBy(timingsArray, "start");
      console.log(`Timings fetched for: ${routeno}`);
    }

    swapTimings(timings);

    try {
      fs.writeFileSync(
        path.join(__dirname, "../src/utils/timings.json"),
        jsonStringify(timings),
      );
      console.log("Successfully wrote timings to file");
    } catch (err) {
      console.error(err);
    }
  };

  checkTimings();
} catch (err) {
  console.error(err);
}
