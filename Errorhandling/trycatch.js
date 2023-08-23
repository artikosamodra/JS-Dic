//Try and Catch

/* Penulisan:
try {
  // kode
} catch (error) {
  // error handling
}
*/

/*
====================================================================================
Jika tidak terjadi error pada code, maka catch tidak akan di akses.
Namun jika terjadi error pada code, maka eksekusi berhenti dan menampilkan catch.
====================================================================================
*/

//Case 1
try {
    console.log("______________");  //1
    console.log("Awal block try");  //2
    console.log("Akhir block try"); //3
} catch (error) {
    console.log("Terjadi error!");  //4
}

//Catatan : pada code try tidak ada yang menimbulkan error, maka outputnya:
/*
______________
Awal block try
Akhir block try
*/

//Case 2
try {
    console.log("______________");  //1
    console.log("Awal block try");  //2
    errorCode;                      //3
    console.log("Akhir block try"); //4
} catch (error) {
    console.log("Terjadi error!");  //5
}

//Catatan : pada code try terdapat error (errorCode), maka outputnya:
/*
______________
Awal block try
Akhir block try
*/

//error pada eksekusi code baris ke 3 berhenti dan tidak dilanjutkan ke baris ke 4 namun langsung menuju ke 'catch'
//============================================================================================


//trycatch dengan properti.
/*CATATAN:
Objek error memiliki beberapa properti:
1. name    = nama error yang terjadi
2. message = pesan dari error
3. stack   = informasi urutan yang menyebabkan error (baris yang terdapat error)
*/

//Example
try {
    console.log("______________");  //1
    console.log("Awal block try");  //2
    errorCode;                      //3
    console.log("Akhir block try"); //4
} catch (error) {
    console.log(error.name); 
    console.log(error.message)
    console.log(error.stack);
}
/*output:
ReferenceError -> (ini adalah name.error)
errorCode is not defined -> (ini adalah message.error)
ReferenceError: errorCode is not defined -> (ini adalah stack.error/baris-baris yang error)
    at Object.<anonymous> (/mnt/h/Repos/JS/Errorhandling/trycatch.js:76:5)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/


//Try Catch Finally
//CATATAN : block 'finally' akan tetap dijalankan tanpa peduli yang terjadi pada block 'try-catch'
//Example
try {
    console.log("______________");  //1
    console.log("Awal block try");  //2
    errorCode;                      //3
    console.log("Akhir block try"); //4
} catch (error) {
    console.log("Terjadi error!");  //5
} finally {
    console.log("Tetap Jalankan");
}
/*output:
Awal block try
Terjadi error!
Tetap Jalankan
*/