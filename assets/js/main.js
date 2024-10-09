import getBusData from "./modules/BusTider/getBusData/getBusData.js";
import sortBusData from "./modules/BusTider/sortBusData/sortBusData.js";
import timeDate from "./modules/Clock/getTimeDate/getTimeDate.js";

import { busTiderContainer } from "./modules/BusTider/busTiderView/busTiderView.js";
import { clock } from "./modules/Clock/UrView/urView.js";
export const myApp = document.getElementById("App");

const busClock = document.createElement("div");
busClock.classList.add("busClock");
busClock.append(busTiderContainer);
busClock.appendChild(clock);

import getFood from "./modules/Food/getFood/getFood.js";
import buildFoodView from "./modules/Food/FoodView/foodView.js";
import { foodContainer } from "./modules/Food/FoodView/foodView.js";
const mainfoodContainer = document.createElement("div");
mainfoodContainer.appendChild(foodContainer);

myApp.appendChild(busClock);
myApp.appendChild(mainfoodContainer);

getData();

export default function getData() {
  getBusData().then((data) => {
    sortBusData(data.MultiDepartureBoard.Departure);
    timeDate();
    setInterval(() => {
      getBusData().then((data) => {
        sortBusData(data.MultiDepartureBoard.Departure);
      });
    }, 60000);
  });
  setInterval(timeDate, 10000);

  getFood().then((data) => {
    console.log(data);
    buildFoodView(data);
  });
  setInterval(getFood, 3600000);
}
