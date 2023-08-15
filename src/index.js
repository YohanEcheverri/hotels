import { hotelesCards } from "./api.js";
import { cambioValor, changeSize, logoCountry } from "./helpers.js";

const hoteles = await hotelesCards();

const divGeneral = document.createElement("div");
const header = document.createElement("header");
const main = document.createElement("main");
const div1Header = document.createElement("div");
const divDiv1Header = document.createElement("div");
const h1 = document.createElement("h1");
const pSection = document.createElement("p");
const div2Header = document.createElement("div");
const selectCountry = document.createElement("select");
const option1Country = document.createElement("option");
const option2Country = document.createElement("option");
const option3Country = document.createElement("option");
const option4Country = document.createElement("option");
const option5Country = document.createElement("option");
const option1Price = document.createElement("option");
const option2Price = document.createElement("option");
const option3Price = document.createElement("option");
const option4Price = document.createElement("option");
const option1Size = document.createElement("option");
const option2Size = document.createElement("option");
const option3Size = document.createElement("option");
const option4Size = document.createElement("option");
const option5Price = document.createElement("option");
const iconCountry = document.createElement("img");
const inputCheckin = document.createElement("input");
const inputCheckout = document.createElement("input");
const selectPrice = document.createElement("select");
const selectSize = document.createElement("select");
const buttonClear = document.createElement("button");
const iconSelectCountry = document.createElement("img");
const iconSelectPrice = document.createElement("img");
const iconSelectSize = document.createElement("img");
const iconSelectDateIn = document.createElement("img");
const iconSelectDateOut = document.createElement("img");
const p1Div2Header = document.createElement("p");
const p2Div2Header = document.createElement("p");
const sectionDivGeneral = document.createElement("section");
const sectionMain = document.createElement("section");
const body = document.querySelector("body");
const message = document.createElement("p");

body.appendChild(divGeneral);
divGeneral.setAttribute("id", "app");

divGeneral.appendChild(header);
header.setAttribute("class", "header");

header.appendChild(h1);
h1.className = "title";
h1.innerText = "Book it!";

header.appendChild(div1Header);
div1Header.className = "Filter__container";

div1Header.appendChild(divDiv1Header);
divDiv1Header.className = "Filter__Grid";

divDiv1Header.appendChild(iconSelectCountry);
iconSelectCountry.setAttribute("class", "icon-select-country");
iconSelectCountry.src = "/assets/1.png";

divDiv1Header.appendChild(selectCountry);
selectCountry.setAttribute("class", "Filter__countries Filter-Icon");
selectCountry.setAttribute("id", "filter-countries");
selectCountry.setAttribute("name", "filter-countries");

selectCountry.appendChild(option1Country);
option1Country.setAttribute("value", "all");
option1Country.innerText = "All countries";

selectCountry.appendChild(option2Country);
option2Country.setAttribute("value", "Argentina");
option2Country.innerText = "Argentina";

selectCountry.appendChild(option3Country);
option3Country.setAttribute("value", "Brasil");
option3Country.innerText = "Brasil";

selectCountry.appendChild(option4Country);
option4Country.setAttribute("value", "Chile");
option4Country.innerText = "Chile";

selectCountry.appendChild(option5Country);
option5Country.setAttribute("value", "Uruguay");
option5Country.innerText = "Uruguay";

divDiv1Header.appendChild(iconSelectDateIn);
iconSelectDateIn.setAttribute("class", "icon-select-datein");
iconSelectDateIn.src = "./assets/3.png";

divDiv1Header.appendChild(inputCheckin);
inputCheckin.className = "Filter__DateFrom Filter-Icon";
inputCheckin.setAttribute("name", "date-from");
inputCheckin.setAttribute("id", "date-from");
inputCheckin.setAttribute("min", "");
inputCheckin.setAttribute("max", "");
inputCheckin.setAttribute("type", "date");
inputCheckin.setAttribute("value", "");

divDiv1Header.appendChild(iconSelectDateOut);
iconSelectDateOut.setAttribute("class", "icon-select-dateout");
iconSelectDateOut.src = "./assets/4.png";

divDiv1Header.appendChild(inputCheckout);
inputCheckout.setAttribute("class", "Filter__DateTo Filter-Icon");
inputCheckout.setAttribute("name", "date-to");
inputCheckout.setAttribute("id", "date-to");
inputCheckout.setAttribute("type", "date");
inputCheckout.setAttribute("min", "");
inputCheckout.setAttribute("value", "");

divDiv1Header.appendChild(iconSelectPrice);
iconSelectPrice.setAttribute("class", "icon-select-price");
iconSelectPrice.src = "./assets/5.png";

divDiv1Header.appendChild(selectPrice);
selectPrice.setAttribute("class", "Filter__Prices Filter-Icon");
selectPrice.setAttribute("name", "filter-prices");
selectPrice.setAttribute("id", "filter-prices");

selectPrice.appendChild(option1Price);
option1Price.setAttribute("value", "all");
option1Price.innerText = "All prices";

selectPrice.appendChild(option2Price);
option2Price.setAttribute("value", "1");
option2Price.innerText = "$";

selectPrice.appendChild(option3Price);
option3Price.setAttribute("value", "2");
option3Price.innerText = "$$";

selectPrice.appendChild(option4Price);
option4Price.setAttribute("value", "3");
option4Price.innerText = "$$$";

selectPrice.appendChild(option5Price);
option5Price.setAttribute("value", "4");
option5Price.innerText = "$$$$";

divDiv1Header.appendChild(iconSelectSize);
iconSelectSize.setAttribute("class", "icon-select-size");
iconSelectSize.src = "./assets/2.png";

divDiv1Header.appendChild(selectSize);
selectSize.setAttribute("class", "Filter__Sizes Filter-Icon");
selectSize.setAttribute("name", "filter-sizes");
selectSize.setAttribute("id", "filter-sizes");

selectSize.appendChild(option1Size);
option1Size.setAttribute("value", "all");
option1Size.innerText = " All sizes ";

selectSize.appendChild(option2Size);
option2Size.setAttribute("value", "Small");
option2Size.innerText = "Small";

selectSize.appendChild(option3Size);
option3Size.setAttribute("value", "Medium");
option3Size.innerText = "Medium";

selectSize.appendChild(option4Size);
option4Size.setAttribute("value", "Large");
option4Size.innerText = "Large";

divDiv1Header.appendChild(buttonClear);
buttonClear.setAttribute("class", "Filter__Clear");
buttonClear.innerText = "Clear";

header.appendChild(div2Header);
div2Header.setAttribute("class", "FoundMessage__Container");

div2Header.appendChild(p1Div2Header);
p1Div2Header.setAttribute("class", "FoundMessage__Title");
p1Div2Header.innerText = "We have found for you...";

div2Header.appendChild(p2Div2Header);
p2Div2Header.setAttribute("class", "FoundMessage__Content");
p2Div2Header.innerText =
  "All sizes hotels of all category prices, in all countries.";

divGeneral.appendChild(sectionDivGeneral);
sectionDivGeneral.setAttribute("class", "InfoMessage");

sectionDivGeneral.appendChild(pSection);
pSection.setAttribute("class", "Info__Text");
pSection.innerText = "Hover over the cards to discover amazing information! ";

divGeneral.appendChild(main);
main.setAttribute("class", "Main");

main.appendChild(sectionMain);
sectionMain.setAttribute("class", "HotelsContainer");

sectionDivGeneral.appendChild(message);
message.setAttribute("class", "noResults");
message.innerText = "No se encontraron resultados";

// const checkInInput = document.getElementById("date-from")

// const today = new Date()

function showCard(data) {
  sectionMain.innerHTML = "";

  data.forEach((hotel) => {
    const cardHotel = document.createElement("article");
    sectionMain.appendChild(cardHotel);
    cardHotel.setAttribute("class", "card");

    const imagenHotel = document.createElement("img");
    cardHotel.appendChild(imagenHotel);
    imagenHotel.setAttribute("src", hotel.photo);
    imagenHotel.setAttribute("alt", hotel.name);
    imagenHotel.setAttribute("class", "hotel-image");

    const nombreHotel = document.createElement("h2");
    cardHotel.appendChild(nombreHotel);
    nombreHotel.innerText = hotel.name;
    nombreHotel.setAttribute("class", "hotel-name");

    const cardInfo = document.createElement("section");
    cardHotel.appendChild(cardInfo);
    cardInfo.setAttribute("class", "card-info");

    const divCountry = document.createElement("div");
    cardInfo.appendChild(divCountry);
    divCountry.setAttribute("class", "div-card-country");

    const imgCountry = document.createElement("img");
    divCountry.appendChild(imgCountry);
    imgCountry.src = logoCountry(hotel.country);
    iconCountry.setAttribute("class", "img-country");

    const countryCard = document.createElement("p");
    divCountry.appendChild(countryCard);
    countryCard.setAttribute("class", "country-name");
    countryCard.innerHTML = hotel.country;

    const divHotel = document.createElement("div");
    cardInfo.appendChild(divHotel);
    divHotel.setAttribute("class", "div-card-room");

    const sizeHotel = document.createElement("p");
    divHotel.appendChild(sizeHotel);
    sizeHotel.setAttribute("class", "hotel-size");
    sizeHotel.innerHTML = `${hotel.rooms} rooms - `;

    const priceHotel = document.createElement("p");
    divHotel.appendChild(priceHotel);
    priceHotel.setAttribute("class", "hotel-price");

    priceHotel.innerHTML = cambioValor(hotel.price);

    const buttonCard = document.createElement("button");
    cardInfo.appendChild(buttonCard);
    buttonCard.setAttribute("class", "button-card");
    buttonCard.innerText = "Book it!";

    pSection.style.display = "none";

    message.style.display = "none";
  });
}

showCard(hoteles);

selectCountry.addEventListener("change", filterAndShowCards);
selectSize.addEventListener("change", filterAndShowCards);
selectPrice.addEventListener("change", filterAndShowCards);

buttonClear.addEventListener("click", clearFilters);

function clearFilters() {
  selectCountry.value = "all";
  selectSize.value = "all";
  selectPrice.value = "all";

  showCard(hoteles);
}

function filterAndShowCards() {
  const selectedCountry = selectCountry.value;
  const selectedSize = selectSize.value;
  const selectedPrice = selectPrice.value;

  const filteredHotels = hoteles.filter((hotel) => {
    const countryMatch =
      selectedCountry === "all" || hotel.country === selectedCountry;
    const sizeMatch =
      selectedSize === "all" || changeSize(hotel.rooms) == selectedSize;
    const priceMatch = selectedPrice === "all" || hotel.price == selectedPrice;

    return countryMatch && sizeMatch && priceMatch;
  });
  showCard(filteredHotels);

  const messageFilter = document.getElementsByClassName("noResults");
  if (filteredHotels.length == 0) {
    messageFilter.style.display = "block";
  } else {
    messageFilter.style.display = "none";
  }
}
