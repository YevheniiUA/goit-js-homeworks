const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3,
  inputPasswords;

do {
  const inputPasswords = prompt("Введите пароль");
  attemptsLeft -= 1;
  const isInclude = passwords.includes(inputPasswords);
  if (isInclude) {
    alert("Добро пожаловать!");
    break;
  } else if (!isInclude && attemptsLeft !== 0) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert("У вас закончились попытки, аккаунт заблокирован!");
  }
} while (inputPasswords !== null && attemptsLeft !== 0);
