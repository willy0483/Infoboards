import busTiderView from "../busTiderView/busTiderView.js";
export default function sortBusData(busData) {
  console.log(busData);

  const firstFiveBusData = busData.slice(0, 5).map((item) => {
    return item;
  });
  busTiderView(firstFiveBusData);
}
