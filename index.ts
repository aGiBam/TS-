//public / private Modifiers 
class Car {
    // public color: string;
    // private year: number;

    constructor(public color: string, private year: number) {
        this.color = color;
        this.year = year;
    }
    // color = 'blue';
    // year = 2026;
    public drive() {
        // console.log(`The ${this.color} car from ${this.year} is driving.`);
        // console.log(this.year);
        this.putInGear();
        this.pressPedal();
        this.turnWheel();
    }

    private putInGear() {
        
    }
    
    private pressPedal() {

    }
    
    private turnWheel() {

    }
}

const myCar = new Car('Silver', 2000);
myCar.drive();
// console.log('color: '+ myCar.color+ ', year: '+ myCar.year);

// myCar.putInGear(); // Error: Property 'putInGear' is private and only accessible within class 'Car'.