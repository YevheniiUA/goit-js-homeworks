'use strict';
/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
const message = "Proin sociis natoque et magnis parturient montes mus";
let price = 0;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
const words = message.split(" ");
console.log(words);

// Выведи в консоли длину массива words
console.log(words.length); // 8

// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
for(let i = 0; i < words.length; i += 1) {
    price += 10;
}
console.log(price); // 80