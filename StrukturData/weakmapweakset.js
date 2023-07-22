
//WeakMap & Weakset

/*
catatan:
Perbedaan Map dan WeakMap:

- Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
- WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.
*/

//WeakMap
const visitsCountMap = new Map(); //menyimpan data user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); //menambahkan user jonas
jonas = null; //Data object "Jonas" dihapus

//delay dibutuhkan untuk menunggu proses garbage collector berkerja
setTimeout(function () {
    console.log(visitsCountMap); //output: Map(1) { { name: 'Jonas' } => 1 }
    console.log("================================");
}, 10000)

/*
Q: mengapa user jonas tetap muncul meskipun sudah dihapus dengan mengubahnya menjadi null?
A: karena user jonas masih tersimpan di memori dan belum benar-benar terhapus.
*/

//================================================

//Berikut contoh menghapus user yang benar-benar pada memori sehingga tidak dapat dijangkau kembali
const { inspect } = require('util');

const visitsCountMap1 = new WeakMap(); // Menyimpan daftar user

function countUser1(user1) {
    let count = visitsCountMap1.get(user1) || 0;
    visitsCountMap1.set(user1, count + 1);
}

let jonas1 = { name: "Jonas1" };
countUser1(jonas1);  // Menambahkan user "Jonas"

jonas1 = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
    console.log(inspect(visitsCountMap1, { showHidden: true })); //output: WeakMap {  }
    console.log("================================");
}, 10000);