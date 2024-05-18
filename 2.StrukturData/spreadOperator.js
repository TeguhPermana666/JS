// SpreadOperator => Menyebarkan nilai array (iterrable object) menjadi beberapa elemen => ...
myArray = ["Indonesia", "Malaysia", "Singapura", "Thailand", "Vietnam", "Timor", "Papua", "Kamboja", "Myanmar"];
console.log(...myArray); // Spread Operator => Menjadi satu elemen

const favorite = ["Seafood", "Salad", "Nugget", "Soup"];
const others  = ["Cake", "Pie", "Donut"];
const menu = [...favorite, ...others];
console.log(menu)
// Jika tidak menggunakan spread operator
const allFavorite = [favorite, others];
console.log(allFavorite)

