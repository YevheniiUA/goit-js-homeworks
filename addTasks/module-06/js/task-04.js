/*
 * Добавь к классу Car из предыдущего задания статический
 * метод getSpecs, который принимает объект-машину как параметр
 * и выводит в консоль значения полей maxSpeed, speed, running и distance.
 */
class Car {
  constructor({ speed = 0, maxSpeed = 0, running = false, distance = 0 }) {
    /*
          Добавь свойства:
            - speed - для отслеживания текущей скорости, изначально 0.
            - maxSpeed - для хранения максимальной скорости 
            - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
            - distance - содержит общий киллометраж, изначально с 0
        */
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.running = running;
    this.distance = distance;
  }
  turnOn() {
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
  }
  turnOff() {
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
  }
  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (spd < this.maxSpeed) {
      this.speed = spd;
    }
  }
  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (spd > 0 && spd < this.maxSpeed) {
      this.speed = spd;
    }
  }
  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if (this.running) {
      this.distance = hours * this.speed;
    }
  }
  static getSpecs(cars) {
    let message = "";
    for (const [key, value] of Object.entries(cars)) {
      message += `${key}: ${value},`;
    }
    console.log(message);
  }
}

const car = new Car({ maxSpeed: 100 });
car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
