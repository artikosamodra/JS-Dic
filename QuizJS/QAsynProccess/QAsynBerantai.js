/**
 * @TODO
 * Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.
 * 1. Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek { tollRoadCard: true, balance: 0 }.
 * 2. Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek { tollRoadCard: true, balance: 10 }.
 * 3. Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.
 *
 * Catatan:
 * - Anda boleh menggunakan async/await atau .then() atau .catch() atau kombinasi keduanya.
 * - Jika ada error, tampilkan error (error.message) tersebut dengan console.log.
 * - Masing-masing langkah di atas harus dijalankan secara berurutan.
 * - Masing-masing langkah akan mencetak pesan ke console.
 * - Anda bisa mengeksplorasi fungsi yang sudah disediakan di utils.js. Namun, Anda tidak boleh mengubah isi dari utils.js.
 */

const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

//menggunakan async await
async function getTollAccess() {
    try {
        const card = await buyTollRoadCard(25); //membeli card >> fungsi dengan saldo 25 (aturan jika saldo <= 25, harus top up)
        const balance = await topUpBalance(true, 10); //top up saldo >> saldo 25, melakukan top-up true, saldo sebesar 10.
        const result = await useTollRoad(balance); //useTollRoad >> menggunakan saldo untuk jalan tol (dalam utils, biaya tolll 10 saldo)
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
    return;
}

//Menggunakan Promise berantai-based (then-catch)
function getTollAccess2() {
    buyTollRoadCard(25)
        .then((money) => {
            return topUpBalance(true, 10)
        })
        .then((card) => {
            return useTollRoad(card)
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error.message);
        });
}


// Jangan hapus kode di bawah ini
getTollAccess();
getTollAccess2()


