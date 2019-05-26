/*
  1
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
const categoriesList = Array.from(
  document.querySelector(".categories").children
);
console.dir(
  categoriesList.map(e => {
    return `Категория: ${e.firstChild.textContent.trim()}
    Количество вложенных li: ${e.firstElementChild.childElementCount}`;
  })
);

/*
2
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const list = document.querySelector(".list");
list.firstElementChild.style.color = "red";
list.lastElementChild.style.color = "blue";

/*
3
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/
const elements = ["HTML", "CSS", "JavaScript", "React", "Node"];
const ul = document.querySelector(".secondList");
elements.map(e => {
  const element = document.createElement("li");
  element.textContent = e;
  return ul.appendChild(element);
});

/*
4
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  },
  {
    url:
      "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"
  },
  {
    url:
      "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"
  }
];
const gallery = document.querySelector(".gallery");
galleryItems.map(e => {
  const li = document.createElement("li");
  const image = document.createElement("img");
  image.setAttribute("src", e.url);
  image.setAttribute("alt", e.alt);
  image.setAttribute("width", 300);
  image.setAttribute("height", 300);
  li.appendChild(image);
  gallery.appendChild(li);
});

/*
5
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
const inputsArray = document.querySelectorAll(".size-filter input[checked]");
function collectInputData(inputs) {
  return Array.from(inputs).map(input => input.value);
}
console.log(collectInputData(inputsArray));

/*
6
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

function createMovieCard() {
  const movieCard = document.querySelector(".movie");
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg"
  );
  image.setAttribute("alt", "movie image");
  image.classList.add("movie__image");

  const movieBody = document.createElement("div");
  movieBody.classList.add("movie__body");

  const movieTitle = document.createElement("h2");
  movieTitle.classList.add("movie__title");
  movieTitle.textContent = "The Godfather";

  const movieDescription = document.createElement("p");
  movieDescription.textContent =
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers,launching a campaign of bloody revenge.";
  movieDescription.classList.add("movie__description");

  const movieDate = document.createElement("p");
  movieDate.classList.add("movie__date");
  movieDate.textContent = "Release: ";
  const movieDateText = document.createTextNode("1972-03-14");
  movieDate.appendChild(movieDateText);

  const movieRating = document.createElement("p");
  movieRating.classList.add("movie__rating");
  movieRating.textContent = "Rating: ";
  const movieRatingText = document.createTextNode("8.6");
  movieRating.appendChild(movieRatingText);

  movieBody.append(movieTitle, movieDescription, movieDate, movieRating);

  movieCard.append(image, movieBody);
  return movieCard;
}
createMovieCard();

/*
7
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

function createBoxes(num) {
  const div = document.querySelector('#root');

  let width = 30,
    height = 30;
  while (num > 0) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.background = `#${Number.parseInt(Math.random()*1000)}`;
    newDiv.style.marginBottom = '15px';
    width += 10;
    height += 10;
    div.append(newDiv);
    num--;
  }
  return div;
}
createBoxes(20);

