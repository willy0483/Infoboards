import { getActivty } from "../activtyModel/activtyModel.js";
import {
  filterCurrentActivities,
  sortActivities,
} from "../activtyModel/activtyModel.js";
import {
  createActivityView,
  createViewContainers,
} from "../activtyView/activtyView.js";
import { filterValidActivities } from "../activtyModel/activtyModel.js";

export async function buildActivty() {
  getActivty().then((data) => {
    // console.log(data);
    let rawActivityData = data;
    let filteredActivityData = filterValidActivities(rawActivityData.value);
    let currentActivityData = filterCurrentActivities(filteredActivityData);
    let sortedData = sortActivities(currentActivityData);
    createActivityView(sortedData);
  });

  createViewContainers();
}
