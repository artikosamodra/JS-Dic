//property
class Car {
    constructor(cbrand, ccolor, cmaxSpeed) {
        this.brand = cbrand;
        this.color = ccolor;
        this.maxSpeed = cmaxSpeed;
        //this.chassisNumber menggunakan property (nilai tidak ditulis manual)
        //random chassis number >> Math.floor = membulatkan angka desimal, Math.random = menghasilkan angka desimal 0 dan <1.
        this._chassisNumber = `${cbrand}-${Math.floor(Math.random() * 1000) + 1}`;
    }

    //jika class ini menggunakan 'getter' dan 'setter' (method ditandai dengan komentar '#case3#')
    //#case3#
    get chassisNumber() {
        return this._chassisNumber; // underscore (_) dianggap sebagai private oleh komunitas JS, dan tidak boleh dirubah
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number')
    }
}

const car1 = new Car('BMW', 'red', 200);
const car2 = new Car('Audi', 'blue', 220);
const car3 = new Car('BMW', 'black', 250);

console.log(car1); //output: Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
console.log(car2); //output: Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
console.log(car3); //output: Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }

//#case3#
const car = new Car('BMW', 'white', 210);
console.log(car.chassisNumber); //output: BMW-584
car.chassisNumber = 'BMW-1'; //output: you are not allowed to change the chassis number (respon dari setter jika memaksa merubah chassing Number = tidak diizinkan)
console.log(car.chassisNumber); //output: BMW-584

console.log("========================");
//=====================================================

//Properti Getter & Setter (agar nilai properti tidak mudah diubah)
class User {
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstname} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstname = firstName;
        this.lastName = lastName;
    }
}

//getter user
//harus mengembalikan nilai dan nilai akan menjadi sebuah properti
//'user' adalah properti baru dari 'new User' dengan nilai 'Artiko Fernando'
const user = new User('Artiko', 'Fernando');
console.log(user); //output: User { firstname: 'Artiko', lastName: 'Fernando'
console.log(user.fullName); ////output: Artiko Fernando

//setter user
//harus menerima satu argumen yang nilainya diambil dari operand kedua ketika assignment operator
//nilai argument operand ke-2 tersebut adalah 'Fulanah'
user.fullName = 'Fulan Fulanah';
console.log(user); //output: User { firstname: 'Fulan', lastName: 'Fulanah' }
console.log(user.fullName); //output: Fulan Fulanah

 /*
 catatan:
 'get fullName' dan 'set fullnname' merupakan accessor property.
 accessor property merupakan method yang mengatur cara akses dari properti 'fullName'
 */

console.log("========================");
//=====================================================