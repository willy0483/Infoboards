import { activityConfig } from "../activityConfig/activityConfig.js";

export async function getActivty() {
  return fetch("https://iws.itcn.dk/techcollege/schedules?departmentcode=smed")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// Function to filter valid activities by using our config file
export const filterValidActivities = (arr) => {
  let filteredData = arr.filter((item) =>
    activityConfig.validEducations.includes(item.Education)
  );
  return filteredData;
};

// Function to filter out the current activities from StartDate
export const filterCurrentActivities = (arr) => {
  let currentActivities = arr.filter(
    (item) => new Date(item.StartDate) >= new Date() - 3600000
  );
  return currentActivities;
};

// Function to sort all activities by date / time
export const sortActivities = (arr) => {
  let sortedData = arr.sort(
    (a, b) => new Date(a.StartDate) - new Date(b.StartDate)
  );
  return sortedData;
};
