/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */


//jika menggunakan promisify
const { promisify } = require('util');
function getProvinces(countryId, callback) {
    setTimeout(() => {

        if (countryId === 'id') {
            callback(null, [
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
            ]);
            return;
        }

        callback(new Error('Country not found'), null);
    }, 1000);
}

const getProvincesPromisify = promisify(getProvinces);

getProvincesPromisify('id')
    .then(countryId => console.log(countryId))
    .catch(err => console.error(err.message));

getProvincesPromisify('us')
    .then(countryId => console.log(countryId))
    .catch(err => console.error(err.message));

/*output:
jika benar:
[
  { id: 'id-jk', name: 'Jakarta' },
  { id: 'id-bt', name: 'Banten' },
  { id: 'id-jr', name: 'Jawa Barat' }
]

jika salah:
Country not found
*/
//=====================================================

//jika menggunakan promise-based
function getProv(countryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countryId === 'id') {
                resolve([
                    { id: 'id-jk', name: 'Jakarta' },
                    { id: 'id-bt', name: 'Banten' },
                    { id: 'id-jr', name: 'Jawa Barat' },
                ]);
                return;
            }
            reject(new Error('Country not found'));

        }, 1000);
    });
}

getProv('id')
    .then(provinces => console.log(provinces))
    .catch(err => console.log(err.message));

getProv('us')
    .then(provinces => console.log(provinces))
    .catch(err => console.error(err.message));

/*output:
jika benar:
[
  { id: 'id-jk', name: 'Jakarta' },
  { id: 'id-bt', name: 'Banten' },
  { id: 'id-jr', name: 'Jawa Barat' }
]

jika salah:
Country not found
*/

module.exports = { getProvinces: getProvinces };