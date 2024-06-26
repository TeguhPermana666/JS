// Kuis Object

/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

// Tulis kode di bawah ini
let restaurant = {
	name : "Bakso Mang Dicoding",
	city : "Bandung",
  	"favorite drink" : "Es Teh",
    "favorite food" : "Bakso",
    isVegan : false
}
const name = restaurant.name;
let favoriteDrink = restaurant["favorite drink"]


// Kuis Array

/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// Tulis kode di bawah ini
evenNumber = [];
n = 100;
for(let i = 1; i <= n; i++){
	if (i % 2 == 0){
    	evenNumber.push(i);
    }
}
console.log(evenNumber);

// Kuis Map
/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

 const priceInJPY = 5000;

 // Tulis kode di bawah ini
 currency = new Map([
       ["USD",14000],
       ["JPY",131],
       ["SGD",11000],
       ["MYR",3500]
 ]);
 priceInIDR = priceInJPY * currency.get("JPY");
 console.log(priceInIDR);