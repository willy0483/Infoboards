export let foodContainer = document.createElement("section");
foodContainer.classList.add("food");

export default function buildFoodView(foodData) {
  foodContainer.innerHTML = "";

  const mainHtml = `
        <fieldset>
          <legend>
              <img src="assets/images/Svg/Burger_icon.svg" alt="Food Icon" />
          </legend>
          <header>
          <hgroup>
          <h2>DAGENS</h2>
          <h2>FROKOST</h2>
          </hgroup>
          </header>
          <section class="uge">
          <p>DEN VARME</p>
          <p>UGE ${foodData.Week}</p>
          </section>
          <section class="food-list"></section> 
        </fieldset>
    `;

  foodContainer.innerHTML += mainHtml;

  const foodListContainer = foodContainer.querySelector(".food-list");

  const today = new Date();
  const options = { weekday: "long" };
  const todayName = today.toLocaleDateString("da-DK", options);

  foodData.Days.forEach((food) => {
    let className = "food-item";
    if (food.DayName.toLowerCase() === todayName.toLowerCase()) {
      className += " highlight";
    }

    const foodHtml = `
        <section class="${className}">
          <div class="day"><p>${food.DayName}</p></div>
          <div class="name"><p>${food.Dish.replace("- kr. 35,00", "").replace(
            "og",
            "&"
          )}</p></div>
        </section>
      `;

    foodListContainer.innerHTML += foodHtml;
  });
}
