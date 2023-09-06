//Promise (Janji)
/*
Promise di JavaScript memiliki beberapa kondisi
- Pending : Promise sedang berjalan.
- Fulfilled : Promise yang terpenuhi.
- Rejected : Promise yang gagal terpenuhi.
*/

//jika menggunakan callback
function getUsers(isOffline, callback) {
    //simulate network delay
    setTimeout(() => {
        const users = ['Artiko', 'Fajar', 'Samodra'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null); //new Error = membuat error baru dari library bawaan JS 'Error'
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

//jika menggunakan promise
function getUser(isOffline) {
    //return a promise object
    return new Promise((resolve, reject) => {

        //simulate network delay
        setTimeout(() => {
            const users = ['Artiko', 'Fajar', 'Samodra'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);
    });
}

//cara memanggil callback
getUsers(false, userCallback); //output: [ 'Artiko', 'Fajar', 'Samodra' ]
getUsers(true, userCallback); //output: cannot retrieve users due offline

//cara memanggil promise
getUser(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));
    //output: [ 'Artiko', 'Fajar', 'Samodra' ]

getUser(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));
    //output: cannot retrieve users due offline