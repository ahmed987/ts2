"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.isRented()) {
            console.log(`${this.getMake()} ${this.getModel()} is already rented.`);
        }
        else {
            this.setRented(true);
            console.log(`Renting ${this.getMake()} ${this.getModel()}.`);
        }
    }
    return() {
        if (this.isRented()) {
            this.setRented(false);
            console.log(`Returning ${this.getMake()} ${this.getModel()}.`);
        }
        else {
            console.log(`${this.getMake()} ${this.getModel()} has not been rented.`);
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, color) {
        super(make, model, year, rented);
        this.color = color;
    }
    rentalRate() {
        return 50;
    }
    getColor() {
        return this.color;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, maxLoad) {
        super(make, model, year, rented);
        this.maxLoad = maxLoad;
    }
    rentalRate() {
        return 200;
    }
    getMaxLoad() {
        return this.maxLoad;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 100;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
const car = new Car("Toyota", "MarkX", 2007, false, "black");
car.rent();
car.return();
const truck = new Truck("BMW", "Truck", 2020, false, 2000);
truck.rent();
truck.rent();
truck.return();
const motorcycle = new Motorcycle("Honda", "CG-125", 2023, true, 125);
motorcycle.rent();
motorcycle.return();
//# sourceMappingURL=app.js.map