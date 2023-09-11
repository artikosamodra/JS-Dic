//Promise Static

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));
const promise4 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error nih')), 3000));

//Promise.all = jika salah satu promise yang dipanggil terdapat error, maka akan langsung memanggil error tanpa menampilkan promise lainnya. 
Promise.all([promise1, promise2, promise3, promise4])
    .then((values) => console.log(values)) //output jika berhasil : [1, 2, 3]
    .catch((error) => console.error(error.message)); //output jika error : Error nih

//Promise.race = seperti promise.all, namun secara paralel dan mengembalikan nilai yang paling cepat menyelesaikan eksekusinya
Promise.race([promise1, promise2, promise3, promise4])
    .then((values) => console.log(values)) //output: 3 (karena promise 3 paling cepat, hanya perlu waktu 1000 untuk eksekusi)
    .catch((error) => console.error(error.message));

//Promise.allSettled = seperti promise.all, namun mengembalikan seluruh hasil promise dalam bentuk array of object (status, va;ue, reason)
Promise.allSettled([promise1, promise2, promise3, promise4])
    .then((results) => console.log(results));
/* output:
[
    { status: 'fulfilled', value: 1 },
    { status: 'fulfilled', value: 2 },
    { status: 'fulfilled', value: 3 },
    {
        status: 'rejected',
        reason: Error: Error nih
            at Timeout._onTimeout (/mnt/h/Repos/JS/Asynch/promisestatic.js:6:75)
            at listOnTimeout (internal/timers.js:554:17)
            at processTimers (internal/timers.js:497:7)
    }
]
*/

//Promise.any = seperti Promise.race, namun hanya mengembalikan yang tercepat dan berstatus fulfilled (berhasil).
Promise.any([promise1, promise2, promise4])
    .then((values) => console.log(values)) //output : 1 (paling tercepat diantar 3 promise yang disebutkan dan tidak error)
    .catch((error) => console.error(error.message));


//Contoh Promise.any Reject = output "All Promises were rejected" jika semua berstatus reject
const promiseRej1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error')), 1000));
const promiseRej2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error')), 2000));
const promiseRej3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error')), 3000));

Promise.any([promiseRej1, promiseRej2, promiseRej3])
    .then((values) => console.log(values))
    .catch((error) => console.error(error.message)); //output: All promises were rejected
