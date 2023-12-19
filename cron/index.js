const fs = require('node:fs');
const path = require('node:path');
const axios = require("axios");
const _ = require("lodash");
const stringify = require('fast-json-stable-stringify');

const ROUTES_WE_NEED = [
  "KIA-4 UP",
  "KIA-4 DOWN",
  "KIA-4A UP",
  "KIA-4A DOWN",
  "KIA-5 UP",
  "KIA-5 DOWN",
  "KIA-5D UP",
  "KIA-5D DOWN",
  "KIA-6 UP",
  "KIA-6 DOWN",
  "KIA-6A UP",
  "KIA-6A DOWN",
  "KIA-6W UP",
  "KIA-7 UP",
  "KIA-7 DOWN",
  "KIA-7A UP",
  "KIA-7A DOWN",
  "KIA-8 UP",
  "KIA-8 DOWN",
  "KIA-8A UP",
  "KIA-8A DOWN",
  "KIA-8C UP",
  "KIA-8C DOWN",
  "KIA-8D UP",
  "KIA-8D DOWN",
  "KIA-8E UP",
  "KIA-8E DOWN",
  "KIA-8EW DOWN",
  "KIA-9 UP",
  "KIA-9 DOWN",
  "KIA-9H UP",
  "KIA-9H DOWN",
  "KIA-10 UP",
  "KIA-10 DOWN",
  "KIA-14 UP",
  "KIA-14 DOWN",
  "KIA-15 UP",
  "KIA-15 DOWN",
  "KIA-15A DOWN",
  "KIA-17 UP",
  "KIA-17 DOWN",
];

try {
  const checkTimings = async () => {
    const timings = {};
    const apiText = fs.readFileSync(path.join(__dirname, "temp_bmtc_api_response.json"), 'utf8');
    const apiJson = JSON.parse(apiText);
    const kiaRoutes = [];
    apiJson.data.forEach(r => {
      if(_.includes(ROUTES_WE_NEED, r.routeno)) {
        kiaRoutes.push(r);
      }
    });

    const sortedKiaRoutes = _.sortBy(kiaRoutes, "routeid");

    // Check for tomorrow, not today
    const currentDate = new Date(Date.now() + 86400000);

    for(let i = 0; i < sortedKiaRoutes.length; i++) {
      const { routeno, routeid, fromstationid, tostationid } = sortedKiaRoutes[i];
      const { data } = await axios.post(
        `${process.env.BMTC_API_ENDPOINT}/GetTimetableByRouteId_v2`,
        {
          routeid,
          fromStationId: fromstationid,
          toStationId: tostationid,
          "current_date": `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
        },
      );
      const timingsTextArray = _.map(data.data[0]?.tripdetails, "starttime");
      timings[routeno] = _.sortBy(
        _.map(timingsTextArray, t => {
          const [hours, minutes] = _.split(t, ":");
          return _.toNumber(hours) * 60 + _.toNumber(minutes);
        })
      );
      console.log(`Timings fetched for: ${routeno}`);
    }

    try {
      fs.writeFileSync(path.join(__dirname, '../src/utils/timings.json'), stringify(timings));
      console.log("Successfully wrote timings to file")
    } catch (err) {
      console.error(err);
    }
  };

  checkTimings();

} catch (err) {
  console.error(err);
}
