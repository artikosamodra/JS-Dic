//set, semua elemen bersifat unik, tidak ada elemen yang sama/duplikat. tidak terdapat pengindeksan maupun urutan.
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet); //output: Set(3) { 1, 4, 6 }

//menambah elemen pada set. dengan .add() = hanya untuk 1 argumen
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
console.log(numberSet); //output: Set(5) { 1, 4, 6, 5, 10 }

//menghapus argumen atau elemen menggunakan .delete()
numberSet.delete(4); //menghapus nilai 4
console.log(numberSet); //output: Set(4) { 1, 6, 5, 10 }