# Project Setup for foodie-frontend


## Getting Project
    git clone https://github.com/ayushbisht2001/Foodie-frontend.git

## Start project

In the project directory, you can run:

### `yarn start`
or
### `npm start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Folder Structure Guide

    pages : contains all the base / container compoent for each route
        - Home.jsx
  

    components : contains all the general , reusable components
        - home
          - context
            - It act as a data provider for whole application
          - Home.jsx
          - LeftSection.jsx
          - RightSection.jsx
          - Search.jsx
          - Sort.jsx
        - map
          - Component render Google Map using Google map apis
        - navbar
        - RestaurantCard
    

    api : contains apis end point for data fetching

  

## Framework and libraries Used
    React ( Material UI)
    Bootstrap
    google-maps-react
