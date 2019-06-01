class Counter {
  constructor(value) {
    this.value = value;
  }
  onChancge(value) {
    const currentValue = document.querySelector(".value");
    currentValue.textContent = value;
  }
  increment() {
    this.value += 1;
    this.onChancge(this.value);
  }
  decrement() {
    this.value -= 1;
    this.onChancge(this.value);
  }
}

const cont = new Counter(0);
const sub = document.querySelector('button[data-action="sub"]');
const add = document.querySelector('button[data-action="add"]');
sub.addEventListener("click", handlerSub);
add.addEventListener("click", handlerAdd);

function handlerSub(e) {
  cont.decrement();
}
function handlerAdd(e) {
  cont.increment();
}
