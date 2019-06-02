/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
const menu = document.querySelector(".js-menu");
menu.addEventListener("click", handlerMenu);

function handlerMenu(e) {
  e.preventDefault();
  const currentLink = e.target;
  const currentItem = e.currentTarget;
  if (currentLink === currentItem) {
    return;
  }
  const activeLink = currentItem.querySelector(".active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }
  currentLink.classList.add("active");
}
