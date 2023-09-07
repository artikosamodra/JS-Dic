//ini adalah callback
function getUsers(isOffline, callback) {
    //simulate network delay
    setTimeout(() => {
        const users = ['Artiko', 'Fajar', 'Samodra'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

function userCallback(error, users) {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(users);
}

//Dapat dipanggil dengan cara callback biasa.
getUsers(false, userCallback); //output: [ 'Artiko', 'Fajar', 'Samodra' ]
getUsers(true, userCallback); //output: cannot retrieve users due offline
//======================================================

//callback menjadi promise dengan promisify
const { promisify } = require('util') //import util dari bawaan nodejs.

function getUser(isOffline, callback) {
    //simulate network delay
    setTimeout(() => {
        const users = ['Artiko', 'Fajar', 'Samodra'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}
const getUserPromise = promisify(getUser);

getUserPromise(false)
    .then(users => console.log(users)) //output: [ 'Artiko', 'Fajar', 'Samodra' ]
    .catch(err => console(err.message));

getUserPromise(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message)); //output: cannot retrieve users due offline


//=============================================
//contoh implementasi

const fs = require('fs'); //fs = file system adalah modul nodejs
//const { promisify } = require('util'); //ini diberikan komentar karena di atas sudah di tuliskan.

const readFilePromise = promisify(fs.readFile); //perintah fs adalah readFile (membaca file)

readFilePromise('./data.txt', 'utf8') //lokasi file dan utf8 = data berbentuk teks.
    .then(data => console.log(data)) //output jika file terbaca : ini adalah text pada data.txt
    .catch(err => console.log(err.message)); //output jika file tidak ada : ENOENT: no such file or directory, open './data.txt'