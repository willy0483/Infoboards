import bulidUrView from "../UrView/urView.js";
// Export the function
export default function timeDate() {
  const weekday = [
    "SØNDAG",
    "MANDAG",
    "TIRSDAG",
    "ONSDAG",
    "TORSDAG",
    "FREDAG",
    "LØRDAG",
  ];

  const now = new Date();
  const day = weekday[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const date = now.getDate();

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const myMonths = months[now.getMonth()];
  const year = now.getFullYear();

  updateTimeDate(now, day, hours, minutes, date, myMonths, year);
}

function updateTimeDate(now, day, hours, minutes, date, myMonths, year) {
  bulidUrView(now, day, hours, minutes, date, myMonths, year);
}
