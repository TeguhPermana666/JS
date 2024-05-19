// Functionality programmig => based on deklaratif
const names = ['Dimas', 'Bambang', 'Candra', 'Didi', 'Eka'];

const genting = names.map((name) => `${name}!`)

console.log(genting)

/**
 * Konsep dasar functionality programming 
 * Pure function, immutability, referential transparency
 */

// 1. Pure Function => Fungsi tidak bergantung terhadap parameter di luar fungsi
const pureFunction = (jari) => {
    return 3.14 * jari**2;
}

console.log(pureFunction(4)); // 50.24
console.log(pureFunction(4)); // 50.24
console.log(pureFunction(8)); // 200.96
console.log(pureFunction(8)); // 200.96


// Pure function with decoration and spreadted operator
const pureFunction2 = (age, person) =>{
    return {...person, age};
}

const person = {
    name: 'Dimas',
}
const newPerson = pureFunction2(20, person);
console.log({person, newPerson});

// 2. Immutable => Tidak dapat diubah
const immutable = names.map((name) => `${name}!`);

console.log({
    names,
    immutable,
});

// Rekrusive
const countDown = (start) =>{
    console.log(start)
    if (start >0) countDown(start-1);
}
countDown(10);

// 3. High Order Function
const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
      const item = arr[index];
      if(!item) return newArray;
      return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
  
    return loopTrough(arr, action);
  }
  
  
const newNames = arrayMap(names, (name) => `${name}!` );
console.log({names, newNames})

function data(int )