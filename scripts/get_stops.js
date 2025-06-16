const fs = require("node:fs");
const path = require("node:path");
const axios = require("axios");
const _ = require("lodash");
const jsonStringify = require("fast-json-stable-stringify");
const { getBmtcData, DEFAULT_HEADERS } = require("./utils");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

try {
  const getStops = async () => {
    const stopsData = {};
    const kiaData = getBmtcData();

    for (let i = 0; i < kiaData.length; i++) {
      const {
        routeno,
        // parentrouteid
      } = kiaData[i];

      /************************************************************************
      // This is ideally how we should've done it but the API is unreliable.
      // So for now we'll just use a backup of the API responses taken from Vonter/bmtc-gtfs
      // Instead of Axios call, it'll be file read and parse. Rest of the code will remain the same
      ************************************************************************/
      // const { data: knData } = await axios.post(
      //   `${process.env.BMTC_API_ENDPOINT}/SearchByRouteDetails_v4`,
      //   {
      //     routeid: parentrouteid,
      //   },
      //   {
      //     headers: DEFAULT_HEADERS,
      //   },
      // );
      // // Same API call as above. Only lan header is different
      // const { data: enData } = await axios.post(
      //   `${process.env.BMTC_API_ENDPOINT}/SearchByRouteDetails_v4`,
      //   {
      //     routeid: parentrouteid,
      //   },
      //   {
      //     headers: {
      //       ...DEFAULT_HEADERS,
      //       lan: "en",
      //     },
      //   },
      // );

      const enDataRaw = fs.readFileSync(
        path.join(__dirname, `stops_responses/en/${routeno}.json`),
      );
      const knDataRaw = fs.readFileSync(
        path.join(__dirname, `stops_responses/en/${routeno}.json`),
      );

      const enData = JSON.parse(enDataRaw);
      const knData = JSON.parse(knDataRaw);

      const direction = _.toLower(_.split(routeno, " ")[1]);
      const enStops = enData[direction].data;

      const stopsDataForTheRoute = {
        totalDistance: _.last(enStops).distance_on_station,
        stops: [],
      };

      // Exclude the first and last stops.
      // BMTC response includes source and destination. We only want intermediate stops
      for (let i = 1; i < enStops.length - 1; i++) {
        stopsDataForTheRoute.stops.push({
          name: enStops[i].stationname,
          name_kn: knData[direction].data[i].stationname,
          loc: [enStops[i].centerlat, enStops[i].centerlong],
          distance: enStops[i].distance_on_station,
        });
      }

      stopsData[routeno] = stopsDataForTheRoute;
      console.log(`Stops fetched for: ${routeno}`);
    }

    try {
      fs.writeFileSync(
        path.join(__dirname, "../src/utils/stops.json"),
        jsonStringify(stopsData),
      );
      console.log("Successfully wrote stops to file");
    } catch (err) {
      console.error(err);
    }
  };

  getStops();
} catch (err) {
  console.error(err);
}
