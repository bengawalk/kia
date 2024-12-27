# KIA Bengaluru Airport Bus UI

## Local development
- Create a `.env` file in the root folder of the repo with the below contents:
    ```dotenv
    VITE_MAPBOX_TOKEN=insert_mapbox_token_here
    VITE_GOOGLE_API_KEY=insert_google_api_key_here
    VITE_BMTC_API_ENDPOINT=endpoint_of_btmc_web_api
    VITE_CORS_ANYWHERE=insert_cors_anywhere_url_here
    VITE_LIVE_SOURCE=insert_live_source_url_here
    VITE_USE_LIVE_SOURCE=FALSE
    ```
  The BMTC web API is used to query for live bus data, it is queried through a cors-anywhere proxy.
  The Live source is used to query a live feed of kia buses, it can be enabled and the relevant url inputted, if the live source is enabled the BMTC_API_ENDPOINT and CORS_ANYWHERE are not used.
  The BMTC web api is used to refresh the `src/utils/timings.json` file when there are updates to bus timings. It is not publicly available. If you need it, please reach out to the team on [Discord](https://discord.gg/XhmvDP4kXp).
- Run the below commands
    ```bash
    yarn install
    yarn start
    ```
## bmtc_utils
This folder contains node.js scripts to query and manipulate BMTC API data.  
`bmtc_api_data.csv`: KIA subset of the BMTC data with route names, IDs and other relevant info  
`get_timings.json`: Gets the latest timetable and saves it to `src/utils/timings.json`  
`get_stops.json`: Get the latest data of stops along all routes and saves to `src/utils/stops.json`  

## Contributing to the repo
Before raising a pull request for feature additions, please open an issue discussing the change.  

Please follow the below guidelines for consistency and ease of review:
- Configure Prettier to run on file save for your IDE
- Use concise and descriptive commit messages
