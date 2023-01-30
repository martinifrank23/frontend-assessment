# IQVIA Frontend Assessment

## Environment Setup
1. Fork and clone this repo to your local machine.
2. This project is setup using Create React App and you can use either `npm` or `yarn` to install dependencies.
2. Run `npm start` or `yarn start` to spin up a live dev server.
3. Please push up to your repo and email a link to us at <jeremiah.brown@iqvia.com>.

## Instructions
1. Create a table consisting of countries with their corresponding data as shown below. Mock data is provided for you in `/src` directory. Also, see reference to the Country type definition below.
2. Build sorting capabilities that are triggered when selecting table headers: ascending, descending and none. You only need to support sorting one column at a time.

*Do not style the table! This assessment should take no longer than an hour to complete.*

<br />

## Mockup
![Table Mockup](/public/mockup.png)

<br />

## Type Definition
```
interface Country {
  confirmed: number;
  recovered: number;
  deaths: number;
  country: string;
  population: number;
  areaInSqKm: number;
  lifeExpectancy: number;
  elevationMeters: number;
  continent: string;
  abbreviation: string;
  location: string;
  capitalCity: string;
  lat: number;
}

const country: Country = {
  confirmed: 54403,
  recovered: 46887,
  deaths: 2363,
  country: "Afghanistan",
  population: 35530081,
  areaInSqKm: 652090,
  lifeExpectancy: 45.9,
  elevationMeters: 972,
  continent: "Asia",
  abbreviation: "AF",
  location: "Southern and Central Asia",
  capitalCity: "Kabul",
  lat: 33.93911,
  lng: 67.709953,
  lng: number,
}
```