class Car {
    #chassisNumber = null; //enclosing
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#generateChassisNumber(); //tambahkan ()
    }

    //membuat property chassing number dari ._chassisNumber.
    get chassisNumber() {
        return this.#chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }

    //method
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reserve() {
        console.log(`${this.brand} ${this.color} is reservering`);
    }

    turn(direction) {
        console.log(`${this.brand} ${this.color} is ${direction}`);
    }
    //memberikan nilai pada _chassisNumber dengan math.floor random.
    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

const car = new Car('BMW', 'red', 205);
const car1 = new Car('BWM', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BWM', 'black', 250, 'b-2');

console.log(car1); //output: Car{brand: 'BWM', color: 'red', maxpSpeed: 200, chassisNumber: 'b-1'}
console.log(car2); //output: Car{brand: 'Audi', color: 'blue', maxpSpeed: 220, chassisNumber: 'a-1'}
console.log(car3); //output: Car{brand: 'BWM', color: 'black', maxpSpeed: 250, chassisNumber: 'b-2'}

car1.drive(); //output: BWM red is driving
car2.reserve(); //output: Audi blue is reservering
car3.turn(); //output: Audi blue is reservering


//ketika underscore '_' dirubah tagar '#', maka statusnya enclosing karena bersifat private. ini untuk mengatasi hak akses private pada property dan objek 
console.log(car.#chassisNumber); //output:BMW-709 (math.random)
car._chassisNumber = 'BMW-1'; 
console.log(car.#chassisNumber); //output: BMW-1
console.log(car.#generateChassisNumber()); //output: BMW-39 (math.random)