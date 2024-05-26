/** Set time out
 *  Argumen pertama merupakan sebuah fungsi yang akan di panggil secara terjadwal
 *  Argumen kedua merupakan delay waktu dalam satuan milisecond
 */
console.log('selamat datang');
setTimeout(() => {
    console.log('setelah 3 detik');
}, 3000);

console.log('program berjalan')

/**
 * Output Async:
selamat datang
program berjalan
setelah 3 detik
* output Sync:
selamat datang
setelah 3 detik
program berjalan
 */

