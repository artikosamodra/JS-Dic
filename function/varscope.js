//contoh scoping
//global variable
const a = 'a'; //dapat diakses pada parent() dan child()

//local variable parent
function parent() {
    const b = 'b'; //dapat diakses pada parent() dan child(), tapi tidak dapat diakses diluar function tersebut

    //local variable child
    function child() {
        const c = 'c'; //hanya dapat diakses oleh child().
    }
}

//berhati-hati dalam mendefinisikan function, karena dapat menghasilkan hasil yang tidak terkira.
//example
function multiply(num) {
    total = num * num;
    return total;
}
let total = 9;
let number = multiply(20);
console.log(total); //output: 400

/*
catatan:
kita berharap nilai total akan tetap 9,
mengingat variabel total pada fungsi multiply seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut.
Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal.
Kita tidak menggunakan keyword const atau let ketika mendeklarasikan variabel total pada fungsi multiply() sehingga variabel total menjadi global.
*/