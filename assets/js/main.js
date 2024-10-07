import getBusData from "./modules/BusTider/getBusData/getBusData.js";
import sortBusData from "./modules/BusTider/sortBusData/sortBusData.js";
import timeDate from "./modules/Clock/getTimeDate/getTimeDate.js";

import { busTiderContainer } from "./modules/BusTider/busTiderView/busTiderView.js";
import { clock } from "./modules/Clock/UrView/urView.js";
export let myApp = document.getElementById("App");

let busClock = document.createElement("div");
busClock.classList.add("busClock");
busClock.append(busTiderContainer);
busClock.appendChild(clock);

myApp.appendChild(busClock);

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
}
