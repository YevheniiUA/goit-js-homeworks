/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
const userInput = prompt('Введите число от 1 до 5');
const userNumber = Number(userInput);

if (userNumber >= 1 && userNumber <= 5) {
  switch (userNumber) {
    case 1:
      alert('Каталог хостелов');
      break;
    case 2:
      alert('Каталог бюджетных отелей');
      break;
    case 3:
      alert('Каталог отелей ***');
      break;
    case 4:
      alert('Каталог отелей ****');
      break;
    case 5:
      alert('Каталог лучших отелей');
      break;
  }
} else if (userInput === null) {
  alert('Очень жаль, приходите еще!')
} else {
  alert('Неверный ввод, возможные варианты 1-5!');
}