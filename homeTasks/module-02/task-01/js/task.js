let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(Number(input));
} while (input !== null);

if (numbers.length === 1) {
  alert("Массив пустой");
} else {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
