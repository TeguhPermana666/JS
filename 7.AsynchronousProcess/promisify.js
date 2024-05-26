/**
 * Promisify => mengubah callback based menjadi promise based
 * 
 * Node if want to change callback with promisify
 * 1. Callback harus berada di akhir function asynchronous
 * 2. Promosify dapat bekerja jika callback memiliki struktur argumen callback(error,data)
 */

// const {promisify} = require('util');
import {promisify} from 'util'; 

function getUsers(isOffline, callback){
    setTimeout(() => {
        const users = ['john', 'peter', 'sarah'];
        if(isOffline){
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }
        callback(null, users);
    }, 3000);
}

// Create promise version of getUsers
const promiseGetUsers = promisify(getUsers);
promiseGetUsers(true)
    .then((user)=>console.log("Process Success: ", user))
    .catch((error)=>console.log("Process Failed ", error.message))