//catatan: arrowfunc hanya berupa expression, sedangkan regulerfunc memiliki declaration da nexpression

//reguler function
//ini adalah declaration
function regulerHello(greet) {
    console.log(`${greet}!`);
}
regulerHello("Halo"); //output: Halo!
//ini adalah expression
const regulerName = function (name) {
    console.log(`Name saya ${name}`)
}
regulerName("Artiko"); //output: Artiko

//arrow function (hanya ada expresion) langsung '=> {}'
const arrowHello = (arrowgreet) => {
    console.log(`${arrowgreet}!`)
}
arrowHello("Hai"); //output: Hai!
const arrowName = (arrowname) => {
    console.log(`Nama saya adalah ${arrowname}`)
}
arrowName("Fernando"); //output: Fernando
console.log("=============");
//==========================================================

//jika kita sama sekali tidak membutukan paramenter, tetap harus menuliskan tanda kurung '()'
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};
sayHello(); //output: Selamat pagi semuanya!
console.log("=============");
//===================================================================

//jika body dari fungsi hanya terdiri 1 baris, kita dapat menghapus kurawal untuk menghemat kode yang ditulis
const sapaanName = sapaanname => console.log(`Nama saya ${sapaanname}`);
sapaanName("Artiko Fernando"); // output: Nama saya Artiko Fernando
const sapaanhello = () => console.log("Selamat pagi semuanya!");
sapaanhello(); // output: Selamat pagi semuanya!
console.log("=============");
//====================================

//ketika perlu nilai kembalian pada fungsi, tidak perlu menggunakan return
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); //output: 12
console.log("=============");
//====================================