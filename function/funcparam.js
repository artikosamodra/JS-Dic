//catatan : params merupakan inisiali dari variable function, sedangkan argument merupakan pengolahan function

//function param
const user = {
    id: 24,
    displayName: 'Artiko',
    fullName: 'Artiko Fernando',
};
function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`); 
}
introduce(user); //output: Artiko is Artiko Fernando
console.log("===========");
//=========================================================

//default param
function exponentFormula(baseNumber, exponent = 3 /* =3 adalah solusi nilai default*/) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
exponentFormula(2); //output: 2^undefined = NaN (setelah solusi) >> 2^3 = 8
//fungsi JS tidak melakukan pengecekan terhadap jumlah maupun tipe argumen
//solusi adalah menambahkan nilai default pada exponent, '=3'
console.log("===========");
//=========================================================

//rest param >> untuk membuat fungsi parameter yang tidak pasti
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5)); //output: 15
console.log("===========");
//=========================================================