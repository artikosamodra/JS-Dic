/*
catatan:
destructuring object menggunakan kurawal '{}'
sedangkan destructuring array menggukan kurung siku '[]'
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood); //output: Seafood
console.log(secondFood); //output: Salad
console.log(thirdFood); //output: Nugget
console.log(fourthFood); //output: Soup
console.log()

//memanggil element tertentu dengan variable baru.
const [, , thirdFood1] = favorites; //memanggil index ke-3 (array ke-2)
console.log(thirdFood1); //output: Nugget
console.log("==========")
//=======================

//Destructuring Assignment
const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
let myFood = "Ice Cream";
let herFood = "Noodles";
[myFood, herFood] = favorites1; //hanya variable, namun urutannya tetap berdasarkan structur array, yaitu array 0 dan 1 untuk variable tersebur

console.log(myFood); //Seafood
console.log(herFood); //Salad
console.log("==========")
//=======================

//Tanpa Destructuring Assignment untuk menukar nilai antara dua variable
var a = 1;
var b = 2;
var temp; //merupakan variable penengah untuk sementara, sehingga tidak efiesien

console.log("Sebelum swap"); //output: Sebelum swap
console.log("Nilai a: " + a); //output: Nilai a: 1
console.log("Nilai b: " + b); //output: Nilai b: 2

//merupakan proses penukaran nilai variable
temp = a;
a = b;
b = temp;

console.log("Setelah swap"); //output: Setelah swap
console.log("Nilai a: " + a); //output: Nilai a: 2
console.log("Nilai b: " + b); //output: Nilai b: 1
console.log();

//Dengan Destructuring Assignment untuk menukar nilai antara dua variable
let c = 1; //harus dengan let, jika const akan error. boleh di coba.
let d = 2;

console.log("Sebelum swap"); //output: Sebelum swap
console.log("Nilai c: " + c); //output: Nilai a: 1
console.log("Nilai d: " + d); //output: Nilai b: 2

[c, d] = [d, c] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log("Setelah swap"); //output: Setelah swap
console.log("Nilai c: " + c); //output: Nilai a: 2
console.log("Nilai d: " + d); //output: Nilai b: 1

console.log("==========")
//=======================

//Default Values

const favorites2 = ["Seafood"];
const [myFood2, herFood2 = "Salad"] = favorites2 //herFood bernilai undefined karena array hanya memiliki 1 element, maka harus diberikan default values pada bagian ini dengan = "values" untuk memberikan nilai pada array indeks ke 2 atau selanjutnya.

console.log(myFood2); //output: Seafood
console.log(herFood2); //output: Salad

