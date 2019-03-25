let userCountry = prompt("Введите страну доставки");
let howMuch;
if (userCountry) {
  userCountry = userCountry.toLowerCase().trim();
}

switch (userCountry) {
  case "китай":
    howMuch = 100;
    break;
  case "южная америка":
    howMuch = 250;
    break;
  case "австралия":
    howMuch = 170;
    break;
  case "индия":
    howMuch = 80;
    break;
  case "ямайка":
    howMuch = 120;
    break;
  default:
    console.log("В вашей стране доставка не доступна.");
}

if (howMuch) {
  console.log(`Доставка в ${userCountry} будет стоить ${howMuch} кредитов.`);
}
