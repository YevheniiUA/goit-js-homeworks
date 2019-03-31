"use strict";
/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";
let longestWord = "";

for (const currentWord of message.split(" ")) {
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
}
console.log(longestWord); // 'force'
