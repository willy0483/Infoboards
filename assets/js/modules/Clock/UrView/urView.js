import { myApp } from "../../../main.js";

const clock = document.createElement("div");

export default function buildUrView(now, day, hours, minutes, date, myMonths) {
  console.log(now);

  let myHtml = `
    <section>
      <img src="assets/images/Svg/Clock_Icon.svg" alt="Clock_Icon" />
      <div class="timeDateContainer">
        <header class="time"><h2>${hours}:${minutes}</h2></header>
        <p class="date">${day} ${date}. ${myMonths}</p>
      </div>
    </section>
  `;

  clock.innerHTML = myHtml;
  myApp.appendChild(clock);
}
