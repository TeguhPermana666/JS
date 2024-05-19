// Reusable function

// 1. Array Map => fungsi bawaan dari array, menghasilkan nilai baru
const maping=['harry', 'ron', 'hermione'].map((name) => { return `${name}!` });

// 2. Array Filter => fungsi bawaan dari array, memfilter data
const filtering= ['harry', 'ron', 'hermione'].filter((name)=>{return name!='ron'});

// 3. Array Reduce -> fungsi bawaan dari array, menggabungkan data
const reducing = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// 4. Array Some => fungsi bawaan dari array, mengecek apakah ada data yang sesuai
const someing = [1, 2, 3, 4, 5].some((value) => value % 2 == 0);

//5. Array Find => fungsi bawaan dari array, mengecek deretan nilai yang di definisikan pada callback fucntion
const finding = [1, 2, 3, 4, 5].find((value) => value % 2 == 0);

// 6. Array sort => fungsi bawaan dari array, mengurutkan data
const sorting = [1, 2, 3, 4, 5].sort((a, b) => b-a);

// 7. Array every => mengcekk apakah semua data pada array sesuai
const scores = [70,85,90];
const minimumScore = 65;
const examPassed = scores.every(score => score >= minimumScore);

// 8. array foreach => memanggil fungsi callback-nya saja.
const names = ['harry', 'ron', 'hermione','thomas'];
names.forEach((name) => console.log(`Hello ${name}!`))