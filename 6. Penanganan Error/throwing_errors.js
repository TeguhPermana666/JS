const json = `{"name":"yoda", "age":9001}`;
const salah = `{bad json}`

try {
    const user = JSON.parse(salah);
    console.log(user);
}
catch(error){
    console.log(error);
}