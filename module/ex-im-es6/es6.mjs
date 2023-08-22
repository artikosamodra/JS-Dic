//exim.js = metode import export dengan node.js >> const {'nama_import'} = require ('directory')
//es6.js = metode import export dengan es6.js >> import {'nama_import'} from ' 'directory' ';
//khusus es6, menggunakan ekstensi '.mjs' untuk pembeda serta menambahkan 'type: module' pada package.json

import { coffeeStock, isCoffeeMachineReady } from './exports.mjs';

console.log(coffeeStock); //output: { arabica: 100, robusta: 150, liberica: 200 }
console.log(isCoffeeMachineReady); //output: true

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock); /*output:
arabica
robusta
liberica
*/

//80 mili, artinya stock robusta (150) masih cukup untuk dipesan. 
makeCoffee("robusta", 80); //output: Kopi berhasil dibuat!

//120 mili, artinya stock arabica (100) tidak cukup untuk dipesan.
makeCoffee("arabica", 120);//output: Biji kopi habis!

