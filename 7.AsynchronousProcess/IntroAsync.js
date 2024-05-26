/**Asynchrnous process => menjalankan proses yang berada di baris selanjutnya 
tanpa harus menunggu kode pada baris pertaman

*/
import {isPrime, random} from "./utils.js";
export function generatePrimes(maximum){
    const max_primes = 1000000;

    const primes = [];

    while(primes.length < max_primes){
        const candidate = random(max_primes);

        if(isPrime(candidate)){
            primes.push(candidate);
        }
    }
    return primes;
}