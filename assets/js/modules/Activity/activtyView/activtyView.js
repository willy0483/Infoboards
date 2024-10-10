import { activityConfig } from "../activityConfig/activityConfig.js";
import {
  appendNodeList,
  clear,
  createEl,
  createElWithText,
} from "../activityUtils/createUtils.js";
import { toLocaleTime } from "../activityUtils/timeUtils.js";

// Get the main container and attach a new classname to it

export const createViewContainers = () => {
  let mainContainer = document.getElementById("activityContainer");
  mainContainer.classList.add("mainContainer");
  let activityContainer = createEl("section");
  activityContainer.id = "activity";
  activityContainer.classList.add("activityContainer");
  mainContainer.appendChild(activityContainer);
};

// Create activity view
export const createActivityView = (arr) => {
  // Clear the view (reset)
  let activityContainer = document.getElementById("activity");
  clear(activityContainer);

  let legend = createEl("legend");
  let img = createEl("img");
  img.src = "assets/images/Svg/Schedule_icon.svg";
  img.alt = "Schedule Icon";
  legend.appendChild(img);

  let header = createEl("header");
  header.classList.add("activity-header");
  let h2 = createEl("h2");
  h2.classList.add("activity-h2");
  h2.textContent = "HER FINDER DU OS";
  header.appendChild(h2);

  let activityTitle = createEl("div");
  activityTitle.classList.add("activityTitle");
  let p_Lokale = createElWithText("p", `Lokale`);
  let p_Holdnavn = createElWithText("p", `Holdnavn`);
  let p_fag = createElWithText("p", `fag`);
  let p_Uddannelse = createElWithText("p", `Uddannelse`);
  let p_Tid = createElWithText("p", `Tid`);

  let titlenode = [p_Lokale, p_Holdnavn, p_fag, p_Uddannelse, p_Tid];
  appendNodeList(titlenode, activityTitle);

  let fieldsetSection = createEl("section");
  fieldsetSection.classList.add("fieldsetSection");

  let fieldset = createEl("fieldset");
  fieldset.appendChild(legend);
  fieldsetSection.appendChild(header);
  fieldsetSection.appendChild(activityTitle);

  let section = createEl("section");

  // Loop through each element in the data array
  arr.forEach((element, index) => {
    // Only do this if index is less them max number of allowed activities
    if (index < activityConfig.maxNum) {
      // Create container for p tags
      let activityWrapper = createEl("div");
      activityWrapper.classList.add("activityWrapper");

      // Create all the P tags
      let p_room = createElWithText("p", `${element.Room}`);
      let p_team = createElWithText("p", `${element.Team}`);
      let p_education = createElWithText("p", `${element.Education}`);
      let p_subject = createElWithText("p", `${element.Subject}`);
      let p_startDate = createElWithText(
        "p",
        `${toLocaleTime(element.StartDate).slice(0, 5)}`
      );

      // Append elements to DOM
      let nodeList = [p_room, p_team, p_education, p_subject, p_startDate];
      appendNodeList(nodeList, activityWrapper);
      section.appendChild(activityWrapper);
      fieldsetSection.appendChild(section);
      fieldset.appendChild(fieldsetSection);
      activityContainer.appendChild(fieldset);
    }
  });
};
