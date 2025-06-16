# KIA Bengaluru Airport Bus UI

Source code for the Airport Bus UI at https://kia.bengawalk.com/

For additional help/information, please join the [Discord chat](https://discord.gg/XhmvDP4kXp)

## Local development

In the repository root, run:

```bash
yarn install
yarn start
```

The search functionality uses Google maps Places API. For the search to work, create a `.env` file in the root folder of the repo with the below contents:

```dotenv
VITE_GOOGLE_API_KEY=insert_google_api_key_here
```

## Contributing to data changes

#### Add a new route

- Add an entry to `BUS_DATA` array in `utils/constants.js`
- Follow the below steps to add the timings, intermediate stops and map path

#### Update timings for a route

- Add/edit corresponding row for `routename` in `src/utils/timings.tsv`
- These are `HH:mm` entries for timings at the starting point

#### Update intermediate stops for a route

- Add/edit corresponding file for `routename` in `scripts/stops_responses/en`.
- The json file is taken from [Vonter/bmtc-gtfs](https://github.com/Vonter/bmtc-gtfs)
- Run `cd scripts`, and `node get_stops.js`

#### Update map path for a route

- Add/edit corresponding geojson file for `routename` in `scripts/routeline_data`
- Run `cd scripts`, and `node get_routelines.mjs`
