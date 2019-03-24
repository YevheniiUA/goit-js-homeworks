const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
const inputPassword = prompt('Введите пароль.');

if (inputPassword === null) {
    message = 'Отменено пользователем!';
} else if (inputPassword !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
} else {
    message = 'Добро пожаловать!';
}
alert(message);