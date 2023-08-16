/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini

class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }

    info() {
        console.log(`name: ${this.name}, age: ${this.age}, isMammal: ${this.isMammal}`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, isMammal) {
        super(name, age, isMammal = true);
    }

    eat() {
        return (`${this.name} sedang makan!`);
    }
}

class Eagle extends Animal {
    constructor(name, age, isMammal) {
        super(name, age, isMammal = false);
    }

    fly() {
        return (`${this.name} sedang terbang!`);
    }
}


//instance
const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

//call output 1
console.log(myRabbit); //output: Rabbit { name: 'Labi', age: 2, isMammal: true }
console.log(myRabbit.eat()); //output: Labi sedang makan!

console.log(myEagle); //output: Eagle { name: 'Elo', age: 4, isMammal: false }
console.log(myEagle.fly()) //output: Elo sedang terbang!
console.log("==============================");

//call output 1
myRabbit.info(); //output: name: Labi, age: 2, isMammal: true
myEagle.info(); //output: name: Elo, age: 4, isMammal: false

myRabbit.eat();
myEagle.fly();

/*
catatan:
alasan kenapa myRabbit.eat() dan myEagle.fly() tidak menampilkan output.
= sebenarnya fungsi tetap dijalankan namun tidak ditampilkan karena tidak memanggil console.log
jika ingin memanggil langsung, maka pada bagian fungsi 'return' bisa diubah menjadi console.log("*****").
namun tentunya akan menghilangkan perintah return.
*/