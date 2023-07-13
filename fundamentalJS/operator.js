//assignment operator
let x = 10;
let y = 5;
x += y;
console.log(x); //output: 15

/* catatan assignment :
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;
*/

//comparison operator
let a = 10;
let b = 12;

console.log(a < b); //output: true
console.log(a > b); //output: false
console.log(a == b); //output: false
console.log(a != b); //output: true
console.log(a === b); //output: false
console.log(a !== b); //output: true
console.log(a >= b); //output: false
console.log(a <= b); //output: true

//perbedaan 'sama' dan 'identik'
const aString = '10';
const aNumber = 10
console.log(aString == aNumber) //true >> karena nilai sama-sama 10.
console.log(aString == aNumber) //false >> karena tipe data berbeda meskipun sama-sama 10

//Logical operator
let c = 10;
let d = 12;

//AND
console.log(a < 15 && b > 10); // true&&true = true
console.log(a > 15 && b > 10); // false&true = false

//OR
console.log(a < 15 || b > 10); //true||true = true
console.log(a > 15 || b > 10); // false||true = true

//NOT
console.log(!(a < 15)); //!true = false
console.log(!(a < 15 && b > 10)); //!(true&&true) = !true = false

//========================================

