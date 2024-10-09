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
myApp.appendChild(busClock);

import getFood from "./modules/Food/getFood/getFood.js";
import buildFoodView from "./modules/Food/FoodView/foodView.js";
import { foodContainer } from "./modules/Food/FoodView/foodView.js";
foodContainer.classList.add("foodContainer");
const mainfoodContainer = document.createElement("div");
mainfoodContainer.appendChild(foodContainer);
myApp.appendChild(mainfoodContainer);

const activityContainer = document.createElement("section");
activityContainer.id = "activityContainer";
myApp.appendChild(activityContainer);

import { buildActivty } from "./modules/Activity/activtyController/activtyController.js";

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
  setInterval(getFood, 7200000);

  buildActivty();
  setInterval(buildActivty, 1800000);
}
