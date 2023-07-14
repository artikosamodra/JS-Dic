let myArray = ["Coklet", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[1]); //output: 42.5 (indeks ke 1 merupakan array ke-2)
console.log(myArray[4]); //output: Programming
console.log("Panjang nilai myArray adalah" + myArray.length + ".") //output: Panjang nilai myArray adalah 5. '.length' digunakan untuk mencetak nilai dari panjang array.

//.push() untuk menambah array diakhir.
myArray.push('JavaScript');
console.log(myArray); ///output: [ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]

//.pop() untuk menegeluarkan array terakhir
myArray.pop();
console.log(myArray); ///output: [ 'Cokelat', 42.5, 22, true, 'Programming' ] >> Array 'JavaScript' dihapus./dikeluarkan

//.shift() untuk mengeluarkan array pertama
myArray.shift();
console.log(myArray); //output: [ 42.5, 22, true, 'Programming' ]

//.unshift() untuk menambahkan array pertama
myArray.unshift("Apple");
console.log(myArray); //output: [ 'Apple', 42.5, 22, true, 'Programming' ]

//delete untuk menghapus array pada posisi tertentu dengan bantuan ['araray ke-x'] menjadi kosong <1 empty item> *indek array masih aa namun kosong
delete myArray[2];
console.log(myArray); //output: [ 'Apple', 42.5, <1 empty item>, true, 'Programming' ]

//.splice() = menghapus array dan indexnya menyebabkan nilai index ke-x hilang dan index dibelakangnya bergeser.
myArray.splice(2, 1); //menghapus dari index 2 sebanyak 1 elemen
console.log(myArray); //output: [ 'Apple', 42.5, true, 'Programming' ]

//.splice(posisi n, jumlah n, new element)
const month = ['January', 'March', 'April', 'May'];
console.log('before splice', month); //output: ['January', 'March', 'April', 'May']

//splice(1, 0, 'February') artinya memotong array ke-1, 0 artinya tidak ada yg dihapus, menambahkan "February"
month.splice(1, 0, 'February'); //output: ['January', Februari, 'March', 'April', 'May']
console.log('after splice: ', month);

//splice(12, 1, 'MaretAja') artinya memotong array ke-2, 1 artinya menghapus 1 element, menambahkan "MaretAja"
month.splice(2, 1, 'MaretAja'); //output: ['January', Februari, 'MaretAja', 'April', 'May']
console.log('after splice and add: ', month);

