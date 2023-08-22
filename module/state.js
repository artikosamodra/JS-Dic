const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

module.exports = { coffeeStock, isCoffeeMachineReady };
/*
module.export di atas merupakan penyerdehanaan dari penulisan script di bawah ini:
module.exports = coffeeStock;
module.exports = isCoffeeMachineReady;
*/

//console.log(module); //>> untuk menampilkan isi module di state.js