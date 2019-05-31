const button = document.querySelector('button[data-action="add"]');
button.addEventListener("click", handlerButton);
function handlerButton() {
  const numbers = document.querySelectorAll("input");
  const result = document.querySelector(".result");
  result.textContent = Number(numbers[0].value) + Number(numbers[1].value);
}
