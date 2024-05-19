// Decalaration Function
function greetings(name, language) { // Parameter
    if (language == 'id') {
        console.log('Hai, ' + name + '!');
    } else if (language == 'en') {
        console.log('Hello, ' + name + '!');
    }
}

let greetingMessage = greetings('John', 'en');// Argument

// Expression function
let greetingMessage2 = function (name, language) {
    if (language == 'id') {
        return 'Hai, ' + name + '!';
    } else if (language == 'en') {
        return 'Hello, ' + name + '!';
    }
}

// Rest Parameter
/**
 * Spread Operator (...) -> menyebarkan array menjadi beberapa elemen yang berbeda
 * Rest Parameter (...) -> Mengabungkan array parameter menjadi beberapa elemen yang berbeda
 * 
 */

function sum(...numbers) {
    let total = 0;
    numbers.forEach((number) => total += number);
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

// Arrow Function
const sayHello = (greet) => {
    console.log(`${greet}!`)
  }
   
  const sayName = (name) => {
    console.log(`Nama saya ${name}`)
  }

  // Closure => menjadikan sebuah private varibale

  // Lexical Scope => Name dapat diakses oleh greet dan greet dipanggil pada parent function 
  function init() {
    const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
  
    return greet();
  }
//Closure
const myFunction = init();
myFunction;


// Clousure 2
const add = () => {
    let counter = 0;
    return () =>{ // return sebuah blank arrow function
        return ++counter; // Menjadi Private
    }
}
console.log(add());
console.log(add());
console.log(add());
addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
