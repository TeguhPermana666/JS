// Array => mengelompokan lebih dari satu nilai dan menempatkanya dalam satu variable
let myArray = ["Indonesia", "Malaysia", "Singapura", "Thailand", "Vietnam", "Timor", "Papua", "Kamboja", "Myanmar"];
console.log(myArray);

// Accessing Array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Push dan Pop => Menambahkan dengan metode stack (akhir array)
myArray.push("Brunei"); // Menambhkan data
console.log(myArray);

myArray.pop(); // Mengeluarkan data
console.log(myArray);

// Unshift dan Shift => Mengeluarkan dan menambahkan data dari awal array
myArray.unshift("Brunei"); // Menambahkan data
console.log(myArray);
myArray.shift(); // Mengeluarkan data
console.log(myArray)

// Delete value of array
delete myArray[0];