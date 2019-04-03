const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3,
  inputPasswords;

do {
  inputPasswords = prompt("Введите пароль");
  if (inputPasswords !== null) {
    attemptsLeft -= 1;
  } else {
    continue;
  }
  if (passwords.includes(inputPasswords)) {
    alert("Добро пожаловать!");
    break;
  } else if (attemptsLeft) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert("У вас закончились попытки, аккаунт заблокирован!");
  }
} while (inputPasswords !== null && attemptsLeft);
