 //Array Map >> memanfaatkan callback function
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });
console.log(newArray); //output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

//Array Filter >> melakukan callback dan filtering terhadap nilai array (tipe data boolean)
const truthArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthArray); //output: [ 1, 'Hallo', 'Harry', 14 ]

//==========================================================
//data ini untuk Array Filter, Array Reducer, Array Find
const students = [
    {
        name: 'Harry',
        score: 60,
    },

    {
        name: 'James',
        score: 88,
    },

    {
        name: 'Ron',
        score: 90,
    },

    {
        name: 'Bethy',
        score: 75,
    }
];

//contonh lain Array Filter
const ScholarshipStudents = students.filter((student) => student.score > 85);
console.log("Array Filter");
console.log(ScholarshipStudents); //output: [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
console.log("============");
//=============================================================


//Array Recude
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log("Array Reducer");
console.log(totalScore); //output: 313
//Array Reduce >> mengeksekusi fungsi reducer pada setiap elemen array dan mengembalikan output 1 nilai saja
/*
arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
// [...] adalah opsional parameter
-callback function dari fungsi ini dapat diolah untuk manipulasi daya currentValue dan menyimpan pada accumulator, dapat didefinisikan pada bagian initialValue
*/
console.log("============");
//=============================================================

//Array Some
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log("Array Some");
console.log(even); //output: true
/*CATATAN
arr.some(callback(element, [index], [array]), [thisArg])
// [...] adalah opsional parameter
-arr.some() = menghasilkan pernyataan dalam nilai boolean terhadap nilai array dari callback function (true/false)
*/
console.log("============");
//=============================================================

//Array Find
const findJames = students.find(student => student.name === 'James');
console.log("Array Find");
console.log(findJames); //output: { name: 'James', score: 88 }
/*CATATAN
arr.find(callback(element, [index], [array]), [thisArg]);
// [...] adalah opsional parameter
- array.find() = menghasilkan 1 nilai dari element yang pertama kali ditemukan, jika tidak ditemukan akan menghasilkan nilai 'undefine'
*/
console.log("============");
//=============================================================

//Array Sort
console.log("Array Sort");

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); //output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort(); //output: [ 1, 1000, 101, 121, 30, 4 ]
console.log(array1);

//sort dengan compare function >> untuk mengurutkan sesuai kriteria kita sendiri
const array2 = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting); //output: [ 1, 4, 30, 1000 ]
//compare ini membandingkan 2 nilai yang menghasilkan 3 result, yaitu:
//1. if negative, 'a' akan diletakkan sebelum 'b'
//2. if positive, 'b' akan diletakkan sebelum 'a'
//3. if 0, tidak ada perubahan tempat

/*CATATAN
arr.sort([compareFunction])
// [...] adalah opsional parameter
- arr.sort() = fungsi bawaan untuk mengurutkan nilai dari sebuah deretan nilai
*/
console.log("============");
//=============================================================

//Array Every
console.log("Array Every");

const scores = [20, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed); //output: false
/*CATATAN
arr.every(callback(element, [index], [array])
-arr.every = untuk mengecek apakah ada nilai yang memenuhi syarat >> output tipe data boolean (true/false)
*/
console.log("============");
//=============================================================

//Array ForEach
//Array forEach = fungsi bawaan dari array, berfungsi memanggil fungsi callback pada setiap iterasi index array
console.log("Array ForEach");
const nama = ['Harry', 'Ron', 'Jeff', 'Thomas'];

//cara imperatif
for (let i = 0; i < nama.length; i++) {
    console.log(`Hello, ${nama[i]}!`);
}
/* output:
Hello, Harry!
Hello, Ron!
Hello, Jeff!
Hello, Thomas!
*/

console.log(" ")

//cara deklaratif
nama.forEach((nama) => {
    console.log(`Hello, ${nama}!`);
});
/*
Hello, Harry!
Hello, Ron!
Hello, Jeff!
Hello, Thomas!
*/

//forEach dengan break & Continue
for (let i = 0; i < nama.length; i++) {
    if (nama[i] === 'Jeff') continue; //bisa
    console.log(`Hello, ${nama}!`);
    /* output:
    Hello, Harry,Ron,Jeff,Thomas!
    Hello, Harry,Ron,Jeff,Thomas!
    Hello, Harry,Ron,Jeff,Thomas!
    */
}

/*
nama.forEach((name) => {
    if (nama[i] === 'Jeff') continue; //tidak bisa
    console.log(`Hello, ${nama}!`);
});
*/

console.log("============");
//=============================================================
