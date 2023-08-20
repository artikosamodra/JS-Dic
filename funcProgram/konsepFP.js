
//Catatan 1 = Pure Fuction >> fungsi tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya
//jika terpengaruh, maka itu adalah impure atau tidak murni

//contoh impure (tidak pure/tidak murni)
let PI = 3.14;
const LuasLingkaranImpure = (jari2) => {
    return PI * (jari2 * jari2);
}
console.log(LuasLingkaranImpure(4)); //output: 50.24

PI = 5; //jika pi tidak sengaja terubah mempengaruhi output, sini yang menyebabkan disebut impure
console.log(LuasLingkaranImpure(4)); //output: 80

//dirubah menjadi pure >> tidak perlu variable PI, tulis nilai angkanya karena tidak boleh bergantung pada nilai luar.
const LuasLingkaranPure = (jari2) => {
    return 3.14 * (jari2 * jari2);
}
console.log(LuasLingkaranPure(4)); //output: 50.24
console.log(LuasLingkaranPure(4)); //output: 50.24
console.log(LuasLingkaranPure(8)); //output: 200.96
console.log(LuasLingkaranPure(8)); //output: 200.96
console.log("=======================");
//=====================================

//Catatan 2 : pure function >> juga dilarang melakukan perubahan nilai yang disengaja / tidak disengaja

//Impure
const createPersonAge1 = (age, person1) => {
    person1.age = age;
    return person1;
};

const person1 = {
    name: 'Bobi'
};
const newPerson1 = createPersonAge1(18, person1); //output :person: { name: 'Bobi', age: 18 },
console.log({ person1, newPerson1 }); //output : newPerson: { name: 'Bobi', age: 18 },

//Pure
const createPersonAge2 = (age, person2) => {
    return { ...person2, age };
};

const person2 = {
    name: 'Bobo'
};
const newPerson2 = createPersonAge2(18, person2);
console.log({ person2, newPerson2 }); //output : { person2: { name: 'Bobo' }, newPerson2: { name: 'Bobo', age: 18 } }
console.log("========================");
//======================================


//Immutability
//menghasilkan array baru daripada merubah array yang sudah ada
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesMark = names.map((name) => `${name}!`);
console.log({ names, newNamesMark, }); //output: { names: ['Harry', 'Ron', 'Jeff', 'Thomas'], newNamesMark: ['Harry!', 'Ron!', 'Jeff!', 'Thomas!'] }


//jika ingin merubah nilaidai sebuah objek dengan immubility
//Case 1: contoh ini tidak menggunakan konsep paradigmaFP, contoh dengan paradigmaFP ada di Case 2.
const user = {
    firstname: 'Harry',
    lastname: 'Protter',
}
console.log(user); //output: { firstname: 'Harry', lastname: 'Protter' }

//kita rename nama belakangnya.
const renameLastNameUser = (newLastName, user) => {
    user.lastname = newLastName;
}
renameLastNameUser('Potter', user);
console.log(user); //output: { firstname: 'Harry', lastname: 'Potter' }


//Case 2: ini menggunakan konsep paradigmaFP >> untuk perbandingan dengan code Case 1.
const user1 = {
    firstName: 'Heri',
    lastName: 'Putter',
}

const createUserNewLastName = (newLastName, user1) => {
    return { ...user1, lastName: newLastName }
}
const newUser = createUserNewLastName('Pitter', user1); //output: { firstName: 'Heri', lastName: 'Pitter' }
console.log(newUser);
console.log("================");
//=============================

//Rekursif : fungsi yang memanggil dirinya sendiri.

//bentuk sintaksis sebelum di rekursif
const countDown = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while (start > 0);
}
countDown(5); /*output:
5
4
3
2
1
*/

//setelah di rekursif
const countDown1 = start => {
    console.log(start);
    if (start > 0) countDown(start - 1);
};
countDown1(5); /*output:
5
4
3
2
1
*/

//Higher-Order Function : function yang dapat menerima function lain pada argumen dan mengembalikan sebuah function
//dapat menyimpan function dalam variable, diperlakukan seperti data
const hello = () => {
    console.log('Hello')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello');
    }
}

hello(); //output : hello
say(hello); //output : hello
sayHello()(); //output : hello

/*Catatan:
Penggunaan High-Order Function untuk:
1. Mengabstraksi atau mengisolasi sebuah aksi, event atau menangani alur async menggunakan callback, promise dsb.
2. Membuat utilities yang dapat berbagi tipe data
3. membuat teknik currying atau function composition.
*/

//Contonh Hight-Order Funtion >> Array map()
const namesx = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if (!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}

const newNamesx = arrayMap(namesx, (name) => `${name}!`);

console.log({
    namesx,
    newNamesx,
}); /*output: 
{
  namesx: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
  newNamesx: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
}
*/
