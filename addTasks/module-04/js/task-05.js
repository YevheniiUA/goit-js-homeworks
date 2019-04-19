/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

const countTotalSalary = obj => {
  let totalSalary = 0;
  for (const salary of Object.values(obj)) {
    totalSalary += salary;
  }
  return totalSalary;
}

// Вызовы функции для проверки
console.log(
    countTotalSalary({})
  ); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330
  
  