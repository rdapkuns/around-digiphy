# Around DigiPHY

- We have main.js that holds all the global stuff for the site. Like renderer, camera, loads the floors, etc
- Each floor has its own JS file, that contains the functionalities that are needed for that floor (including loading the 3d model)

## To launch the project locally:
- Navigate to folder "around-digiphy" in terminal and run:
    - `npm i` to install dependencies
    - `npm run dev` for development mode


- Afterwards you can:
    - `npm run build` to build latest version
    - `npm run preview` to see latest build
    - `npm run deploy` to publish latest build


## Maintenance
- This project uses Supabase Realtime for mobile remote interaction. However, Supabase automatically shuts down projects that have had no activity for several weeks. For this reason, we recommend creating your own Supabase project and replacing the `ANON_KEY` and `URL` values in the `.env` file. This allows you to keep the project active and prevents it from being shut down.
