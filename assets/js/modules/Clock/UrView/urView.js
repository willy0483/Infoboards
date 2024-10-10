import { myApp } from "../../../main.js";

export const clock = document.createElement("div");
clock.classList.add("clock");

export default function buildUrView(
  now,
  day,
  hours,
  minutes,
  date,
  myMonths,
  year
) {
  console.log(now);

  let myHtml = `
    <fieldset>
        <legend>
            <img src="assets/images/Svg/Clock_Icon.svg" alt="Clock Icon" />
        </legend>
        <section class="timeDateContainer">
            <div>
                <header class="time">
                    <h2>${hours}:${minutes}</h2>
                </header>
                <p class="date">${day} ${date}. ${myMonths} ${year}</p>
            </div>
        </section>
    </fieldset>

  `;

  clock.innerHTML = myHtml;
}
