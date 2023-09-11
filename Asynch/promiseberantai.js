//contoh promise berantai untuk mesin kasir otomatis (pembelian coffee)

let coffeeStock = 100;
const price = 5000;
let balance = 70000;

function orderCoffe(quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quantity > coffeeStock) {
                reject(new Error('Saat ini stok kopi tidak cukup'));
            } else if (quantity <= 0) {
                reject(new Error('Anda belum memasukkan pesanan'));
            } else {
                const totalPrice = quantity * price;
                coffeeStock -= quantity;
                resolve(totalPrice);
                console.log(`total harga ${totalPrice}`);
            }
        }, 1000);
    });
}


function confirmPayment(totalPrice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (balance < totalPrice) {
                reject(new Error('Maaf saldo anda tidak cukup'));
            } else {
                const lastBalance = balance - totalPrice;
                balance = lastBalance
                console.log(`Sisa saldo anda ${balance}`);
            }
            resolve('Pesanan anda akan di antar, silakhkan menunggu');
            
        }, 1000);
    });
}

function buyCoffee() {
    orderCoffe(12)
        .then((quantity) => {
            return confirmPayment(quantity)
        })
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error.message);
        });
}

buyCoffee();