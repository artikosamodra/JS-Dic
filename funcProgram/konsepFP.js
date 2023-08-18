
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
    name: 'Bobo'
};
const newPerson1 = createPersonAge1(18, person1); //output :person: { name: 'Bobo', age: 18 },
console.log({ person1, newPerson1 }); //output : newPerson: { name: 'Bobo', age: 18 },

//Pure
const createPersonAge2 = (age, person2) => {
    return { ...person2, age };
};

const person2 = {
    name: 'Bobo'
};
const newPerson2 = createPersonAge2(18, person2);
console.log({ person2, newPerson2 });

//output :
//output :