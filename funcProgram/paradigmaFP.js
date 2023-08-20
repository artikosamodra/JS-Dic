//code ini memanggil setiap nama pada array, lalu menambahkan '!' pada setiap index.
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

//gaya imperatif = pengisian array newNames1 dilakukan secara manual untuk proses looping-nya
const newNames1 = [];
for (let i = 0; i < names.length; i++) {
    newNames1.push(`${names[i]}!`);
}
console.log(newNames1); //output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]


//gaya deklaratif : ringkas dan tidak perlu looping manual
const newNames2 = names.map((name) => `${name}!`);
console.log(newNames2); //output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]