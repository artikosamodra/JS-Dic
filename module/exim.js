const coffeeStock = require('./state');

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
