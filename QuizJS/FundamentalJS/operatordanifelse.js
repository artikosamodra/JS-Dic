/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
    let result;

    // TODO
    if (score >= 90) {
        console.log('Selamat! Anda mendapatkan nilai A.') //console.log hanya memanggil
        result = 'Selamat! Anda mendapatkan nilai A.' //result = agar tidak undifined dari nilai hasil
    }
    else if (score >= 80) {
        console.log('Anda mendapatkan nilai B.')
        result = 'Anda mendapatkan nilai B.'
    }
    else if (score >= 70) {
        console.log('Anda mendapatkan nilai C.')
        result = 'Anda mendapatkan nilai C.'
    }
    else if (score >= 60) {
        console.log('Anda mendapatkan nilai D.')
        result = 'Anda mendapatkan nilai D.' 
    }
    else {
        console.log('Anda mendapatkan nilai E.')
        result = 'Anda mendapatkan nilai E.'
    }


    // Jangan hapus kode ini
    return result;
}

console.log(scoreChecker(71));

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = scoreChecker;