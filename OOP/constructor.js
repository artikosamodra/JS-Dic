//OOP menggunakan Constructor Function
function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function () {
    console.log(`${ this.brand } ${ this.color } is reversering`)
}

Car.prototype.turn = function () {
    console.log(`${ this.brand } ${ this.color } is turning`)
}

const car1 = new Car('Toyota', 'Silver', 200, 'to-02');
const car2 = new Car('Honda', 'Red', 180, 'ho-01');
const car3 = new Car('Suzuki', 'Black', 220, 'su-01');

console.log(car1); //output: Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-02' }
console.log(car2); //output: Car { brand: 'Honda', color: 'Red', maxSpeed: 180, chassisNumber: 'ho-01' }
console.log(car3); //output: Car { brand: 'Suzuki', color: 'Black', maxSpeed: 220, chassisNumber: 'su-01' }

car1.drive(); //output: Toyota Silver is driving
car2.drive(); //output: Honda Red is driving
car3.drive(); //output: Suzuki Black is driving

car1.reverse(); //output: Toyota Silver is reversering
car2.reverse(); //output: Honda Red is reversering
car3.reverse(); //output: Suzuki Black is reversering

car1.turn(); //output: Toyota Silver is turning
car2.turn(); //output: Honda Red is turning
car3.turn(); //output: Suzuki Black is turning

/*
catatan:
1. penggunaan huruf kapital pada 'Car' bertujuan untuk membedakan fungsi biasa dengan fungsi contructor
2. penggunaan 'this' bernilai objek (instance) bermanfaat untuk menetapkan nilai properti dan method
3. construtor function memiliki internal property, untuk mendefinis9ikan method-method yang dimiliki objek agar mudah dalam pewarisan (inheritance)
4. penggunaan 'new' bertujuan membuat objek baru 'car1' 'car2' 'car3'
*/

console.log("=====================");
//===========================================================

//constructor dengan 'class' di Sintaks JS modern (ES6)
class Motorcycle {
    constructor(mbrand, mcolor, mMaxSpeed, mType) {
        this.brand = mbrand;
        this.color = mcolor;
        this.MaxSpeed = mMaxSpeed;
        this.Type = mType;
    } //this.x >> akan mendapatkan output x

    mdrive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    mreverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    mturn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

const motor1 = new Motorcycle('Harley Davidson', 'Black', 200, 'Hd-200');
const motor2 = new Motorcycle('Scoppy', 'White', 150, 'Sp-150');
const motor3 = new Motorcycle('Ninja', 'Green', 250, 'Nj-250');

console.log(motor1); //output: Motorcycle { brand: 'Harley Davidson', color: 'Black', MaxSpeed: 200, Type: 'Hd-200' }
console.log(motor2); //output: Motorcycle { brand: 'Scoppy', color: 'White', MaxSpeed: 150, Type: 'Sp-150' }
console.log(motor3); //output: Motorcycle { brand: 'Ninja', color: 'Green', MaxSpeed: 250, Type: 'Hd-250' }

motor1.mdrive(); //output: Harley Davidson Black is driving
motor2.mdrive(); //output: Scoopy White is driving
motor3.mdrive(); //output: Ninja Green is driving

motor1.mreverse(); //output: Harley Davidson Black is reversering
motor2.mreverse(); //output: Scoopy White is reversering
motor3.mreverse(); //output: Ninja Green is reversering

motor1.mturn(); //output: Harley Davidson Black is turning
motor2.mturn(); //output: Scoopy White is turning
motor3.mturn(); //output: Ninja Green is turning

//mengecek type kelas dengan typeof
console.log(typeof Car); //output: function
console.log(typeof Motorcycle); //output: function