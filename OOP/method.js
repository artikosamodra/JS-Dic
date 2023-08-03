class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }
}

const car1 = new Car('BWM', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BWM', 'black', 250, 'b-2');

console.log(car1); //output: Car{brand: 'BWM', color: 'red', maxpSpeed: 200, chassisNumber: 'b-1'}
console.log(car2); //output: Car{brand: 'Audi', color: 'blue', maxpSpeed: 220, chassisNumber: 'a-1'}
console.log(car3); //output: Car{brand: 'BWM', color: 'black', maxpSpeed: 250, chassisNumber: 'b-2'}