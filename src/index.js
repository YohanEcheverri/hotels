const divGeneral = document.createElement("div");
const header = document.createElement("header");
const main = document.createElement("main");
const div1Header = document.createElement("div");
const divDiv1Header = document.createElement("div")
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
const iconCountry = document.createElement("img")
const inputCheckin = document.createElement("input");
const inputCheckout = document.createElement("input");
const selectPrice = document.createElement("select");
const selectSize = document.createElement("select");
const buttonClear = document.createElement("button");
const p1Div2Header = document.createElement("p");
const p2Div2Header = document.createElement("p");
const sectionDivGeneral = document.createElement("section");
const sectionMain = document.createElement("section");
const articleSectionMain = document.createElement("article");
const body = document.querySelector("body");
const buttonConsulta = document.createElement("button")


body.appendChild(divGeneral)
divGeneral.setAttribute("id", "app")


divGeneral.appendChild(header)
header.setAttribute("class", "header")


header.appendChild(h1)
h1.className = "title"
h1.innerText = "Book it!"


header.appendChild(div1Header)
div1Header.className = "Filter__container"


div1Header.appendChild(divDiv1Header)
divDiv1Header.className = "Filter__Grid"

// divDiv1Header.appendChild(iconCountry)
// iconCountry.setAttribute("src", "/assets/1.png")

divDiv1Header.appendChild(selectCountry)
selectCountry.setAttribute("class", "Filter__countries Filter-Icon")
selectCountry.setAttribute("id", "filter-countries")
selectCountry.setAttribute("name", "filter-countries")
// selectCountry.appendChild(iconCountry)
// iconCountry.src = "/assets/1.png"

selectCountry.appendChild(option1Country)
option1Country.setAttribute("value", "all")
option1Country.innerText = "All countries"

selectCountry.appendChild(option2Country)
option2Country.setAttribute("value", "country1")
option2Country.innerText = "Argentina"

selectCountry.appendChild(option3Country)
option3Country.setAttribute("value", "country2")
option3Country.innerText = "Brasil"

selectCountry.appendChild(option4Country)
option4Country.setAttribute("value", "country3")
option4Country.innerText = "Chile"

selectCountry.appendChild(option5Country)
option5Country.setAttribute("value", "country4")
option5Country.innerText = "Uruguay"

divDiv1Header.appendChild(inputCheckin)
inputCheckin.className = "Filter__DateFrom Filter-Icon"
inputCheckin.setAttribute("name", "date-from")
inputCheckin.setAttribute("id", "date-from")
inputCheckin.setAttribute("min", "")
inputCheckin.setAttribute("max", "")
inputCheckin.setAttribute("type", "date")
inputCheckin.setAttribute("value", "")


divDiv1Header.appendChild(inputCheckout)
inputCheckout.setAttribute("class", "Filter__DateTo Filter-Icon")
inputCheckout.setAttribute("name", "date-to")
inputCheckout.setAttribute("id", "date-to")
inputCheckout.setAttribute("type", "date")
inputCheckout.setAttribute("min", "")
inputCheckout.setAttribute("value", "")


divDiv1Header.appendChild(selectPrice)
selectPrice.setAttribute("class", "Filter__Prices Filter-Icon")
selectPrice.setAttribute("name", "filter-prices")
selectPrice.setAttribute("id", "filter-prices")

selectPrice.appendChild(option1Price)
option1Price.setAttribute("value", "all")
option1Price.innerText = "All prices"

selectPrice.appendChild(option2Price)
option2Price.setAttribute("value", "price1")
option2Price.innerText = "$"

selectPrice.appendChild(option3Price)
option3Price.setAttribute("value", "price2")
option3Price.innerText = "$$"

selectPrice.appendChild(option4Price)
option4Price.setAttribute("value", "price3")
option4Price.innerText = "$$$"

selectPrice.appendChild(option5Price)
option5Price.setAttribute("value", "price4")
option5Price.innerText = "$$$$"


divDiv1Header.appendChild(selectSize)
selectSize.setAttribute("class", "Filter__Sizes Filter-Icon")
selectSize.setAttribute("name", "filter-sizes")
selectSize.setAttribute("id", "filter-sizes")

selectSize.appendChild(option1Size)
option1Size.setAttribute("value", "size1")
option1Size.innerText = "All sizes"

selectSize.appendChild(option2Size)
option2Size.setAttribute("value", "size2")
option2Size.innerText = "Small"

selectSize.appendChild(option3Size)
option3Size.setAttribute("value", "size3")
option3Size.innerText = "Medium"

selectSize.appendChild(option4Size)
option4Size.setAttribute("value", "size4")
option4Size.innerText = "Large"

divDiv1Header.appendChild(buttonClear)
buttonClear.setAttribute("class", "Filter__Clear")
buttonClear.innerText = "Clear" 


header.appendChild(div2Header)
div2Header.setAttribute("class", "FoundMessage__Container")

div2Header.appendChild(p1Div2Header)
p1Div2Header.setAttribute("class", "FoundMessage__Title")
p1Div2Header.innerText = "We have found for you..."

div2Header.appendChild(p2Div2Header)
p2Div2Header.setAttribute("class", "FoundMessage__Content")
p2Div2Header.innerText = "All sizes hotels of all category prices, in all countries."


divGeneral.appendChild(sectionDivGeneral)
sectionDivGeneral.setAttribute("class", "InfoMessage")

sectionDivGeneral.appendChild(pSection)
pSection.setAttribute("class", "Info__Text")
pSection.innerText = "Hover over the cards to discover amazing information! "


divGeneral.appendChild(main)
main.setAttribute("class", "Main")

main.appendChild(sectionMain)
sectionMain.setAttribute("class", "HotelsContainer")

sectionMain.appendChild(articleSectionMain)
articleSectionMain.setAttribute("class", "hotelCard")

// sectionMain.appendChild(buttonConsulta)
// buttonConsulta.setAttribute("class", "button-consulta")
// buttonConsulta.innerText = "Consulta"



const hotelesCard = async () => {
    const response = await fetch ("https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels");
    const data = await response.json();
    // console.log(data);
    return data
}

function showCard(data) {
    console.log(data)
    data.forEach((hotel) => {
        const cardHotel = document.createElement("article")
        sectionMain.appendChild(cardHotel)
        cardHotel.setAttribute("class", "card")

        const imagenHotel = document.createElement("img")
        cardHotel.appendChild(imagenHotel)
        imagenHotel.setAttribute("src", hotel.photo)
        imagenHotel.setAttribute("alt", hotel.name)
        imagenHotel.setAttribute("class", "hotel-image")
        
        const nombreHotel = document.createElement("h2")
        cardHotel.appendChild(nombreHotel)
        nombreHotel.innerText = hotel.name
        nombreHotel.setAttribute("class", "hotel-name")

        const cardInfo = document.createElement("section")
        cardHotel.appendChild(cardInfo)
        cardInfo.setAttribute("class", "card-info")

        const divCountry = document.createElement("div")
        cardInfo.appendChild(divCountry)
        divCountry.setAttribute("class", "div-card-country")

        const imgCountry = document.createElement("img")
        divCountry.appendChild(imgCountry)
        function logoCountry (country) {
            switch (country) {
                case "Argentina":
                    return './assets/argentina.png';
                case "Brasil":
                    return './assets/brasil.png';
                case "Chile":
                    return './assets/chile.png';
                case "Uruguay":
                    return './assets/uruguay.png';
                default:
                    return 'Pais no valido';
                }
        }
        imgCountry.src = logoCountry(hotel.country)
        iconCountry.setAttribute("class", "img-country")

        const countryCard = document.createElement("p")
        divCountry.appendChild(countryCard)
        countryCard.setAttribute("class", "country-name")
        countryCard.innerHTML = hotel.country



        const divHotel = document.createElement("div")
        cardInfo.appendChild(divHotel)
        divHotel.setAttribute("class", "div-card-room")

        
        const sizeHotel = document.createElement("p")
        divHotel.appendChild(sizeHotel)
        sizeHotel.setAttribute("class", "hotel-size")
        sizeHotel.innerHTML = hotel.rooms +" rooms -"

        const priceHotel = document.createElement("p")
        divHotel.appendChild(priceHotel)
        priceHotel.setAttribute("class", "hotel-price")
        function cambioValor (price) {
            switch (price) {
                case 1:
                    return '$';
                case 2:
                    return '$$';
                case 3:
                    return '$$$';
                case 4:
                    return '$$$$';
                default:
                    return 'Número no válido';
                }
        }
        priceHotel.innerHTML = cambioValor(hotel.price)

        const buttonCard = document.createElement("button")
        cardInfo.appendChild(buttonCard)
        buttonCard.setAttribute("class", "button-card")
        buttonCard.innerText = "Book it!"

        pSection.style.display = "none"

    });
}

const hoteles = await hotelesCard()

showCard(hoteles)


// articleSectionMain.appendChild(hotelesCard())

// hotelesCard()

import { hotelesCards } from "./api.js";

// buttonConsulta.addEventListener("click" , async () => {
//     const response = await hotelesCards()
//     const data = await response.json()
//     sectionMain.innerHTML = ""



    
    // data.forEach((hotel) => {
    //     const cardHotel = document.createElement("article")
    //     sectionMain.appendChild(cardHotel)
    //     cardHotel.setAttribute("class", "card")

    //     const imagenHotel = document.createElement("img")
    //     cardHotel.appendChild(imagenHotel)
    //     imagenHotel.setAttribute("src", hotel.photo)
    //     imagenHotel.setAttribute("alt", hotel.name)
    //     imagenHotel.setAttribute("class", "hotel-image")
        
    //     const nombreHotel = document.createElement("h2")
    //     cardHotel.appendChild(nombreHotel)
    //     nombreHotel.innerText = hotel.name
    //     nombreHotel.setAttribute("class", "hotel-name")

    //     const cardInfo = document.createElement("section")
    //     cardHotel.appendChild(cardInfo)
    //     cardInfo.setAttribute("class", "card-info")

    //     const divCountry = document.createElement("div")
    //     cardInfo.appendChild(divCountry)
    //     divCountry.setAttribute("class", "div-card-country")

    //     const imgCountry = document.createElement("img")
    //     divCountry.appendChild(imgCountry)
    //     function logoCountry (country) {
    //         switch (country) {
    //             case "Argentina":
    //                 return './assets/argentina.png';
    //             case "Brasil":
    //                 return './assets/brasil.png';
    //             case "Chile":
    //                 return './assets/chile.png';
    //             case "Uruguay":
    //                 return './assets/uruguay.png';
    //             default:
    //                 return 'Pais no valido';
    //             }
    //     }
    //     imgCountry.src = logoCountry(hotel.country)
    //     iconCountry.setAttribute("class", "img-country")

    //     const countryCard = document.createElement("p")
    //     divCountry.appendChild(countryCard)
    //     countryCard.setAttribute("class", "country-name")
    //     countryCard.innerHTML = hotel.country



    //     const divHotel = document.createElement("div")
    //     cardInfo.appendChild(divHotel)
    //     divHotel.setAttribute("class", "div-card-room")

        
    //     const sizeHotel = document.createElement("p")
    //     divHotel.appendChild(sizeHotel)
    //     sizeHotel.setAttribute("class", "hotel-size")
    //     sizeHotel.innerHTML = hotel.rooms +" rooms -"

    //     const priceHotel = document.createElement("p")
    //     divHotel.appendChild(priceHotel)
    //     priceHotel.setAttribute("class", "hotel-price")
    //     function cambioValor (price) {
    //         switch (price) {
    //             case 1:
    //                 return '$';
    //             case 2:
    //                 return '$$';
    //             case 3:
    //                 return '$$$';
    //             case 4:
    //                 return '$$$$';
    //             default:
    //                 return 'Número no válido';
    //             }
    //     }
    //     priceHotel.innerHTML = cambioValor(hotel.price)

    //     const buttonCard = document.createElement("button")
    //     cardInfo.appendChild(buttonCard)
    //     buttonCard.setAttribute("class", "button-card")
    //     buttonCard.innerText = "Book it!"

    // });




