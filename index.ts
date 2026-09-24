interface Driveable {
    speed: number;
    drive(): string;
}

class car implements Driveable {
    speed = 10;

    drive() {
        return `I am driving at ${this.speed}`;
        
    }
}

const myCar = new car();

const startDriving = (vehicle: Driveable) => {
    vehicle.drive();
};

startDriving(myCar);