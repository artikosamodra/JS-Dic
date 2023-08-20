 //Array Map >> memanfaatkan callback function
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });
console.log(newArray); //output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

//Array Filter >> melakukan callback dan filtering terhadap nilai array (tipe data boolean)
const truthArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthArray); //output: [ 1, 'Hallo', 'Harry', 14 ]

//==========================================================
//data ini untuk Array Filter, Array Reducer
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
console.log(ScholarshipStudents); //output: [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]


//Array Recude
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore); //output: 313

//Array Reduce >> mengeksekusi fungsi reducer pada setiap elemen array dan mengembalikan output 1 nilai saja
/*
arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
// [...] adalah opsional parameter

1.callback function dari fungsi ini dapat diolah untuk manipulasi daya currentValue dan menyimpan pada accumulator, dapat didefinisikan pada bagian initialValue
*/