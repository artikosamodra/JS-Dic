import _ from 'lodash';

//cara penjumlahan umum
const myArray = [1, 2, 3, 4];
let sum = 0; 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}


//jika menggunakan function reduce
const myArrayReduce = [5, 6, 7, 8];
let sumReduce = myArrayReduce.reduce((prev, curr) => {
    return prev + curr;
});

//jika dengan lodash
const myArrayLodash = [9, 10, 11, 12];
const sumLodash = _.sum(myArrayLodash);

console.log(sum); //output: 10
console.log(sumReduce); //output: 26
console.log(sumLodash); //output: 42

//jika dengan "type: module" pada package.json, menggunakan import
//jika tidak, gunakan require