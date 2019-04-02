let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");
  if (input !== null) {
    input = input.trim();
  } else {
    alert("А жаль...")
    continue;
  }
  if (!isNaN(input) && input !== "") {
    numbers.push(Number(input));
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
} while (input !== null);
if (numbers.length === 0) {
  alert("Массив чисел пустой");
} else {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
