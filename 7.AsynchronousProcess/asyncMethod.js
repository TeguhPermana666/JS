// Promise static method
/**
 * Promise.all
 * Promise.race
 * Promise.allSettled
 * Promise.any
 */

// Promise.all => Ekseksusi semua promise secara pararel
const promise1 = new Promise((resolve)=>setTimeout(()=>resolve(1),1000));
const promise2 = new Promise((resolve)=>setTimeout(()=>resolve(2),2000));
const promise3 = new Promise((resolve)=>setTimeout(()=>resolve(3),3000));

Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values))

// Promise.race => eksekusi beberapa Promise secara pararel seperti Promise.all()
// Namun hanya mengembalikan nilai promise yang paling cepat menyelesaikan eksekusinya

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value)); // 1 setelah 1 detik

// Promise.allSettled => Mengembalikan seluruh hasil promis yang di eksekusi dalam bentuk array of object
//   {
//     status: 'fulfilled' | 'rejected',
//     value: 'value of the Promise',
//     reason: 'error of the Promise',
//   }

  Promise.allSettled([promise1, promise2, promise3])
    .then((values) => console.log(values));


// Promise.any => Mengembalikan promise yang paling cepat menyelesaikan eksekusinya, yg bersastus fullfiled

  Promise.any([promise1, promise2, promise3])
    .then((value) => console.log(value));