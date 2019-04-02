const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3,
  inputPasswords;

do {
  inputPasswords = prompt("Введите пароль");
  if (inputPasswords !== null) {
    attemptsLeft -= 1;
    inputPasswords = inputPasswords.trim();
  } else {
    continue;
  }
  const isCorrectPassword = passwords.includes(inputPasswords);
  if (isCorrectPassword) {
    alert("Добро пожаловать!");
    break;
  } else if (attemptsLeft !== 0) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert("У вас закончились попытки, аккаунт заблокирован!");
  }
} while (inputPasswords !== null && attemptsLeft !== 0);
