const ADMIN_PASSWORD = "m4ng0h4ckz";
let message = "Добро пожаловать!";
const inputPassword = prompt("Введите пароль.");

if (inputPassword === null) {
  message = "Отменено пользователем!";
} else if (inputPassword !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
