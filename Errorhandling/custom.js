//custom error
class validatorError extends Error { //Error adalah class bawaan dari JS, seperti arr dan calender
    constructor(message) {
        super(message);
        this.name = "Validation Error";
     }
}


//let json = '{"name": "artiko", "age": 30}';
let json = '{"age": 30}';


try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new validatorError("'name' is required."); //'validatorError' merupakan class error yang dibuat secara custom sesuai kebutuhan kita sendiri. 
    }

    if (!user.age) {
        throw new validatorError("'age' is required");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof validatorError) { //bagian ini merupakan kondisi custom error yang kita buat sendiri.
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
