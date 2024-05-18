// Destructuring Object => Mengambil data dari sebuah object, mengeluarkan nilai dari suatu object kedalam variabel

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }

const {firstName, lastName} = profile;

console.log(firstName, lastName)


// Destructuring object assigment
const assigment = {
    name: "Dimas",
    umur: 20,
}
let name = "Riska";
let umur= 21;

({name, umur} = assigment); // () => agar tidak mengira block statement
console.log(name, umur)

// Default value
const defaultValue = {
    nama: "Dimas",
    usia: 20,
    male : false
}
const {nama, usia, isMale = true} = defaultValue;
console.log(nama, usia, isMale)

// Assigning different local variable
const assigningDeffirent = {
    a: "Mulyiono",
    b: 20,
    c: true
}
const {a: adan, b:buduh, c: ci} = assigningDeffirent;
console.log(adan, buduh, ci)