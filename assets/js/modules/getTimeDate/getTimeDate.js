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
  console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);
}
