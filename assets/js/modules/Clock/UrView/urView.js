import { myApp } from "../../../main.js";

const clock = document.createElement("div");

export default function buildUrView(now, day, hours, minutes, date, myMonths) {
  console.log(now);

  let myHtml = `
  <div class="background-container">
    <img src="assets/images/TrainBackgroundImage.jpg" alt="Background Image"> 
    <div id="siteContent">
      <div id="tidContainer">
        <div id="tidContent">
          <img id="clockImage" src="assets/images/Svg/Clock_Icon.svg" alt="Clock_Icon" />
            <div class="timeDateContainer">
              <header class="time"><h2>${hours}:${minutes}</h2></header>
              <p class="date">${day} ${date}. ${myMonths}</p>
            </div>
        </div>
      </div>
    
    
    
    </div>
  </div>
  `;

  clock.innerHTML = myHtml;
  myApp.appendChild(clock);
}
