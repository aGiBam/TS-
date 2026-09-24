export class Car {
  year: number;

  constructor() {
    this.year = 2020;
  }

  drive(speed: number) {
    console.log(`'Driving @' ${speed}`);
  }
}
const myCar = new Car();
console.log(myCar.year); //undefined
