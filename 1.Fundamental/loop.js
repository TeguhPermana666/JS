// for loop
const data = ["Indonesia", "Malaysia", "Singapura","Thailand", "Vietnam","Timor","Papua","Kamboja","Myanmar"];
for (let i = 0; i< data.length; i++){
    console.log(`For Loop : ${data[i]}`);
}
// For of loop, di gunakan untuk injeksi value array (mirip for in di py)
for (const item of data) {
    console.log(`For of Loop : ${item}`);
}

// While and do while
let i = 0;// initial
while (i < data.length) { //checking
    console.log(`While Loop : ${data[i]}`);
    i++;// increment
}
let j = 0;
do {
    console.log(`Do While Loop : ${data[j]}`);
    j++;
} while (j < data.length)