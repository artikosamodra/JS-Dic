//Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);
console.log("================");
//=============================

//Destructuring Assignment
const profile1 = {
    firstName1: "John",
    lastName1: "Doe",
    age1: 18
}
let firstName1 = "Dimas";
let age1 = 20;

// menginisialisasi nilai baru melalui destructuring object
({ firstName1, age1 } = profile1); //tidak perlu dideklarasikan dengan const dab sebagainya.
console.log(firstName1);
console.log(age1);
/*
output:
John
18
*/
console.log("================");
//=============================

//default values = jika property pada profile yang dipanggil tidak tersedia, maka akan bernilai 'undefined'
const profile2 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 18
}

const { firstName2, age2, isMale2 } = profile2;
console.log(firstName2)
console.log(age2)
console.log(isMale2)
/*
output:
John
18
undefined
*/
console.log("================");
//=============================

//contoh perubahan agar isMale tidak undefined
const profile3 = {
    firstName3: "John",
    lastName3: "Doe",
    age3: 18
}

const { firstName3, age3, isMale3 = false} = profile3; //kita tambahakan nilai isMale3 dengan boolean 'false' agar nilai tidak undefined
console.log(firstName3)
console.log(age3)
console.log(isMale3)
/*
output:
John
18
false
*/
console.log("================");
//=============================

//Assignment ke local variable yang berbeda 
const profile4 = {
    firstName4: "John",
    lastName4: "Doe",
    age4: 18
}

//local variable baru didefinisikan pada bagian ini
const { firstName4: localFirstName, lastName4: localLastName, age4: localAge } = profile4;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

/* output:
John
Doe
18
*/




