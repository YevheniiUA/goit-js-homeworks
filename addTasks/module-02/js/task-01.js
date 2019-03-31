/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */
'use strict';
const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
users.pop();
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
users.unshift("Lux");
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.splice(users.length, 0, "Jay", "Kiwi");
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = "Ajax";
users.splice(users.indexOf(userToDelete), 1);
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = "Jay";
users.splice(users.indexOf(userToInsertBefore), 0, "Kong");
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
