const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const data = {
    firstName: "Johny",
    lastName: "Doey",
    age: 120
}

const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
const dfirstName = data.firstName
const dlastName = data.lastName
const dage = data.age

console.log(firstName, lastName, age);
//output: John Doe 18

console.log(firstName, lastName, age, dfirstName, dlastName, dage);
//output: John Doe 18 Johny Doey 120

/*
catatan:
meskipun memiliki nama object yang sama, namun berbeda array.
jadi akan mempermudah inisialisasi object-object tersebut untuk digunakan
*/