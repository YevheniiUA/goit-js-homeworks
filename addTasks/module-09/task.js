let count = 0;
const button = document.querySelector('.button');
button.addEventListener('click', handlerButton);
function  handlerButton (e) {
    e.currentTarget.textContent = count;
    count += 1;
}
