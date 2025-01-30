export let busTiderContainer = document.createElement("section");
busTiderContainer.classList.add("bus");

export default function busTiderView(busData, error) {
  busTiderContainer.innerHTML = "";

  const mainHtml = `
      <fieldset>
        <legend>
            <img src="assets/images/Svg/Bus_Icon.svg" alt="Bus Icon" />
        </legend>
        <header><h2>${busData[0].line} MOD </h2> <h2>${busData[0].direction}</h2></header>
        <section class="whats-next">
        <p classs="de-næste">DE NÆSTE <span class="afgange">AFGANGE<span></p>
        </section>
        <section class="stoppested-ankomst">
        <p>stoppested</p> <p>ankomst</p>
        </section>
        <section class="busContainer"></section> 
      </fieldset>
  `;

  busTiderContainer.innerHTML += mainHtml;

  const busContainer = busTiderContainer.querySelector(".busContainer");

  busData.forEach((bus) => {
    // console.log(bus);
    const busHtml = `
      <section class="busTider">
        <div class="stoppeSted"><p>${bus.direction}</p></div>
        <div class="anKomst"><p>${bus.time}</p></div>
      </section>
    `;
    busContainer.innerHTML += busHtml;
  });
}
