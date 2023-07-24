//Closure = fungsi yang dapat mengakses variabel di dalam lexical scope-nya (fungsi bersarang)

//fungsi return (kembalian) dipanggil dari innerfunction
function init() {
    const name = 'Artiko Fernando'; //varlocalparent didalam scope func 'init'

    function greet() { //innerfunc, contoh closure
        console.log(`Halo, ${name}`); //'name' dipanggil dari varlocalparent 
    }
    greet();
}
init(); //output: Halo, Artiko Fernando
console.log("============");
//=========================================================

//fungsi return (kembalian) dipanggil dari outerfunction
function init1() {
    const name1 = "Artiko Fernando";

    function greet1() {
        console.log(`Halo, ${name1}`);
    }
    return greet1;
}

const myFunction = init1();
myFunction(); //output: Hallo, Artiko Fernando
console.log("============");
//=========================================================

//add counter dengan assignment operator
let counter = 0;
const add = () => {
    return ++counter;
}
console.log(add()); //output: 1
console.log(add()); //output: 2
counter = 23;
console.log(add()); //output: 24
/*
nilai counter akan bertambah setiap memanggil fungsi add
namun kita dapat menambahkan langsung dengan assignment operator (conter =23), namun berpotensi menciptakan bug
*/


//jika menggunakan closure
//closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private.
const adding = () => {
    let counter1 = 0;
    return () => {
        return ++counter1
    };
}
const addCounter = adding();
console.log(addCounter()); //output: 1
console.log(addCounter()); //output: 2
console.log(addCounter()); //output: 3
console.log("============");
//=========================================================