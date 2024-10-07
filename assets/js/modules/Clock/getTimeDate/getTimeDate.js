import bulidUrView from "../UrView/urView.js";
// Export the function
export default function timeDate() {
  const weekday = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];
  const now = new Date();
  const day = weekday[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const date = now.getDate();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const myMonths = months[now.getMonth()];

  updateTimeDate(now, day, hours, minutes, date, myMonths);
}

function updateTimeDate(now, day, hours, minutes, date, myMonths) {
  bulidUrView(now, day, hours, minutes, date, myMonths);
  setInterval(timeDate, 10000);
}
