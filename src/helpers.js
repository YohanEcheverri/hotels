export function cambioValor(price) {
  switch (price) {
    case 1:
      return "$";
    case 2:
      return "$$";
    case 3:
      return "$$$";
    case 4:
      return "$$$$";
    default:
      return "Número no válido";
  }
}

export function changeSize(rooms) {
  if (rooms <= 10) {
    return "Small";
  } else if (rooms <= 30) {
    return "Medium";
  } else {
    return "Large";
  }
}

export function logoCountry(country) {
  switch (country) {
    case "Argentina":
      return "./assets/argentina.png";
    case "Brasil":
      return "./assets/brasil.png";
    case "Chile":
      return "./assets/chile.png";
    case "Uruguay":
      return "./assets/uruguay.png";
    default:
      return "Pais no valido";
  }
}
