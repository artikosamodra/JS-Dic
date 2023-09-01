//Pola Callback

/* berikut polanya:
function callback(error, data) {
  // logika ketika proses asynchronous selesai
}
*/

//contohnya
function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users); //proses berjalan, lalu fungsi callback memanggil hasil dari null pada isOffline dan data dari 'users'
    }, 3000);
}

function usersCallback(error, users) {
    if (error) {
        console.log('process failed:', error.message);
        return;
    }
    console.log('process success:', users);
}

//Case1
getUsers(false, usersCallback); //output: process success: ['John', 'Jack', 'Abigail']
//Case2
getUsers(true, usersCallback); //output: process failed: cannot retrieve users due offline

/*
Penjelasan case 1.
1. getUsers(false, usersCallback) dipanggil/dijalankan
2. selama delay 'setTimeout', users diinisialisasi dengan array ['John', 'Jack', 'Abigail']
3. kemudian memeriksa nilai null pada isOffline:
    - jika isOffline = true >> error : proses dihentikan dan output memanggil argumen pada 'userCallback'+'error,.message' pada isOffline.
    - jika isOffline = false >> proses berlanjut, argumen if error pada callback diabaikan dan lanjur ke argumen selanjutnya + 'users' yang berisi array.
*/

