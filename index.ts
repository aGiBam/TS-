class Car {
    color: string;
    year: number;

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }
    // color = 'blue';
    // year = 2026;
    drive() {
        console.log(`The ${this.color} car from ${this.year} is driving.`);
    }
}

const myCar = new Car('Silver', 2000);
myCar.drive();
console.log('color: '+ myCar.color+ ', year: '+ myCar.year);
