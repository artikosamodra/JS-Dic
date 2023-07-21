//map bertujuan untuk array multi dimensi dengan tipe data bebas tidak hanya int dan string.

//array multi dimensi (map)
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);
console.log(myMap); //output: Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
console.log("=====================");
//================================================

//map elemen pertama adalah key, elemen kedua adalah value

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["Londo", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size); //output: 3
console.log(capital.get("London")); //output: England
capital.set("New Delhi", "India"); //set >> untuk menambah indeks array baru pada map 
console.log(capital.size); //output: 4
console.log(capital.get("New Delhi")); //output: India
capital.set("Canberra", "Australia"); //entri ke 5
capital.set("Kuala Lumpur", "Malaysia"); //entri ke 5 
console.log(capital.size); // 5
console.log(capital.get("Canberra")); //Australia
console.log(capital.size); // 5
console.log(capital.get("Kuala Lumpur")); // Malaysia

/*
Catatan:
capital.size digunakan untuk menginisialisasi data entri yg masuk.
pada kasus diatas. data entri awal ada 3 capital size.
yaitu:
    ["Jakarta", "Indonesia"],
    ["Londo", "England"],
    ["Tokyo", "Japan"]

lalu ditambahkan 'set' untul entr ke 4, yaitu >> capital.set("New Delhi", "India");
maka capital.size ("New Delhi", "India") adalah entri ke 4.

terakhir ditambahkan kembali entri, yaitu:
    capital.set("Canberra", "Australia");
    capital.set("Kuala Lumpur", "Malaysia");
maka kedua data di atas memiliki nilai kapital size 5.

*jumlah data yang dientri tidak berpengaruh pada nilai entri capital.size jika menambahkan objek dengan metode set().
setiap entri objek, akan bertambah nilai entrinya tanpa memperdulikan jumlah data/objek yang ditambahkan.
*/

console.log("=====================");
//================================================

//.has dan .delete
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";
console.log(wrongMap.has("My Key")); //output: false
console.log(wrongMap.delete("My Key")); //output: false
//.has untuk memeriksa key pada map apakah tersedia atau tidak
//.delete untuk menghapus entri suatu kunci (key) dalam objek pada map.

