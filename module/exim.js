//exim.js = metode import export dengan node.js >> const {'nama_import'} = require ('directory')
//es6.js = metode import export dengan es6.js >> import {'nama_import'} from ' 'directory' ';

// penulisan 'coffeeStock' menjadi '{ coffeeStock, isCoffeeMachineReady }' karena mengimport lebih dari 1 nilai/disesuaikan dengan module export pada file state.js
const { coffeeStock, isCoffeeMachineReady } = require('./state');

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

//80 mili, artinya stock robusta (150) masih cukup untuk dipesan. 
makeCoffee("robusta", 80); //output: Kopi berhasil dibuat!

//120 mili, artinya stock arabica (100) tidak cukup untuk dipesan.
makeCoffee("arabica", 120);//output: Biji kopi habis!

//menampilkan isi dari state.js yang di export dengan inisial coffeeStock.
console.log(coffeeStock); //output: { arabica: 100, robusta: 150, liberica: 200 }
console.log(isCoffeeMachineReady); //output: true