/**
 * Promise => Janji (terpenuhi dan tidak terpenuhi)
 * ada tiga kondisi : Pending, Fulfilled, Rejected
 * Pending => Promise sedang berjalan
 * Fulfilled => Promise terpenuhi
 * Rejected => Promise ditolak
 * 
 * Promise method => "mengembalikan objek Promise" langsung pada fungsi yang berjalan secara asynchronous
 * Fungsi yang mengembalikan objek Promise akan memiliki fungsi .then dan .catch, digunakan untuk
 * mengambil alih nilai yang dibawa oleh resolve dan reject 
 * Pemanggilan dapat berantai seperti then().catch()
 */

function getUsers(isOffline){
    // Return a promise object
    return new Promise((resolve, reject)=>{//call resolve & reject function as argument on constructor object
        // Simulate network delay
        setTimeout(()=>{
            const users = ['john', 'peter', 'sarah'];
            if (isOffline){
                reject(new Error('cannot retrieve users due offline'));
                return;
            }
            resolve(users)
        })
    })
}
getUsers(true)
    .then((users)=>{//to resolve
        console.log('Process Success: ',users); 
    })
    .catch((error)=>{ // to reject
        console.log('Process Failed ', error.message); 
    })