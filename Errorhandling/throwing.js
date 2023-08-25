//Case 1
const json = '{name": "Artiko", "age": 26}';
try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}; //output : Unexpected token n in JSON at position 1  ||>> n berasal dari 'n'ame.

console.log("=================");

//Case 2
const json1 = '{"age": 26}';
try {
    const user = JSON.parse(json1);

    console.log(user.name); //output: undefined
    console.log(user.age); //output: 26
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}; //meskipun output berhasil dan mengabaikan catch, namun ini tetap dianggap error karena tidak ada pada properti json1 dan dapat mempengaruhi running program kita 

console.log("=================");

//Solusi Case 2 (menggunakan throw)
const json2 = '{"name": "Yoda", "age": 26}';
try {
    const user = JSON.parse(json1);

    if (!user.name) {
        throw new SyntaxError("`name` is required");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(`JSON Error: ${error.message}`); //output: JSON Error: `name` is required
    console.log(error.name); //output: SyntaxError
    console.log(error.message); //output: `name` is required
};

console.log("=================");

//Anggap permasalahan Json selesai, bagaimana jika terdapat error lain yang belum terdefinisi?
//Contoh Solusi
const json3 = '{"name": "Artiko", "age": 26}';
try {
    const user = JSON.parse(json3);

    if (!user.name) {
        throw new SyntaxError("`name` is required");
    }

    errorCode; //error

    console.log(user.name); //output: Artiko
    console.log(user.age); //output: 26

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message)
    } else {
        console.log(error.stack);
    }
}; //output: errorCode is not defined >> menjelaskan errorCode tidak terdefinisikan.