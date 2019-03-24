const country = 'Индия';
let howMuch;

switch (country) {
    case 'Китай':
        howMuch = 100;
        break;
    case 'Южная Америка':
        howMuch = 250;
        break;
    case 'Австралия':
        howMuch = 170;
        break;
    case 'Индия':
        howMuch = 80;
        break;
    case 'Ямайка':
        howMuch = 120;
        break;
    default:
       console.log('В вашей стране доставка не доступна.');
}

if(howMuch !== undefined) {
console.log(`Доставка в ${country} будет стоить ${howMuch} кредитов.`);
}