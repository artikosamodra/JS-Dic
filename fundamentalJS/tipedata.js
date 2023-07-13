let x = 10;
console.log(typeof(x));
//output: number

let y = 17.25;
console.log(typeof(y));
//output: number

//=======================================

//operator
let a = 12;
let b = 9;
console.log(a + b) //21
console.log(a - b) //3
console.log(a * b) //108
console.log(a / b) //1.333333333
console.log(a % b) //3
//=======================================

//increment & decrement
let postfix = 5;
console.log(postfix++); //output: 5 'nilai ditambah seteah post'
console.log(postfix); //output: 6

let prefix
console.log(++prefix); //output: 6 'nilai ditambah sebelum dipost'
//=======================================

//BigInt = integer besar
const bigNumber = 123455677546456456456456456464564564554n; 
const myInt = 1234565645765675675675623423434;
console.log(bigNumber); //jika 'n' maka ditampilkan seluruhnya
console.log(myInt); //jika tidak, hanya nagka maksimun int yaitu dengan pangkat e+sekian
//=======================================

//BigInt Aritmatika
console.log(5n + 2n); //7n
console.log(5n - 2n); //3n
console.log(5n * 2n); //10n
console.log(5n / 2n); //2n, bukan 2.5n, karena bukan tipe data float.
console.log(5n % 2n); //1n (sisa 1)
//=======================================

//string1
let greet = "Hello";
console.log(typeof (greet)) //output: String

//string2
const question = '"What do you think of JavaScript" i asked';
console.log(question) //output: "What do you think of JavaScript" i asked

//String backslash
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer); //output: "I think it's awesome!" he answered confidently

//StringOperator
let greet1 = "Hello";
let moreGreet = greet1 + greet1;
console.log(moreGreet); //output: HelloHello

//StringInterpolation($)
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`) //output: Hello, my name is Luke.
//=======================================

//Boolean
let o = true;
let p = false;

console.log(typeof (o)) //output: boolean
console.log(typeof (p)) //output: boolean
//=======================================

 //boolean operator
const ac = 10;
const bd = 12;

let isGreat = ac > bd;
let isLess = ac < bd;

console.log(isGreat); //output: false
console.log(isLess); //output: true
//=======================================

//null
let someLaterData = null;
console.log(someLaterData); //output: null
//=======================================

//Symbol
const id = Symbol("id");
console.log(id);

//symbol sbg identifier
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2); //output: false
