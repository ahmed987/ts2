var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.isRented()) {
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " is already rented."));
        }
        else {
            this.setRented(true);
            console.log("Renting ".concat(this.getMake(), " ").concat(this.getModel(), "."));
        }
    };
    Vehicle.prototype.return = function () {
        if (this.isRented()) {
            this.setRented(false);
            console.log("Returning ".concat(this.getMake(), " ").concat(this.getModel(), "."));
        }
        else {
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " has not rented."));
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, color) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.color = color;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 50;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, maxLoad) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.maxLoad = maxLoad;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 200;
    };
    Truck.prototype.getMaxLoad = function () {
        return this.maxLoad;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, engineSize) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engineSize = engineSize;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 100;
    };
    Motorcycle.prototype.getEngineSize = function () {
        return this.engineSize;
    };
    return Motorcycle;
}(Vehicle));
var car = new Car("Changan", "alsvin", 2020, false, "white");
car.rent();
car.return();
var truck = new Truck("Tesla", "Truck", 2022, false, 5000);
truck.rent();
truck.rent();
truck.return();
var motorcycle = new Motorcycle("Suzuki", "gs-150", 2015, false, 150);
motorcycle.rent();
motorcycle.return();
