/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];
  
  // Вызовы функции для проверки
  console.log(
    getAllPropValues(users, 'name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
    getAllPropValues(users, 'mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
    getAllPropValues(users, 'active')
  ); // []