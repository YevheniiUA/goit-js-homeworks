let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");
  if (input === null) {
    continue;
  } else if (!Number.isNaN(+input) && input.trim() !== "") {
    numbers.push(+input);
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
} while (input !== null);
if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
