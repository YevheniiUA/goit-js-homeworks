/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 9
};

const maxDoTasks = members => {
  let maxTask = 0;
  let name;
  for (const key of Object.keys(members)) {
    if (members[key] > maxTask) {
      maxTask = members[key];
      name = key;
    }
  }

  return name;
};

console.log(maxDoTasks(tasksCompleted));
