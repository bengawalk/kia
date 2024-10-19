/*
    Read files in the routeline_data folder and write them to the src/utils/routelines.json file
*/

import fs from "node:fs";
import path from "node:path";
import _ from "lodash";
import polyline from "google-polyline";

const routelineDataFolder = path.join(process.cwd(), "routeline_data");
const routelineDataFiles = fs.readdirSync(routelineDataFolder);

const routelines = {};

for (const file of routelineDataFiles) {
  const filePath = path.join(routelineDataFolder, file);
  const routelineData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const routename = path.basename(file, ".geojson");
  const encodedRouteline = encodeURIComponent(
    polyline.encode(
      routelineData.features[0].geometry.coordinates
    ),
  );
  routelines[routename] = encodedRouteline;
}

fs.writeFileSync(
  path.join(process.cwd(), "..", "src", "utils", "routelines.json"),
  JSON.stringify(routelines, null, 2),
);
