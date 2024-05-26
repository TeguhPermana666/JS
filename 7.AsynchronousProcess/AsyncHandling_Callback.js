// Asynchronous handling terdiri dari berbagai macam bagian:

// 1. Callback
/**
 * Callback salah satu cara menangani proses asynchronous, fungsi yang disisipkan pada argumen fungsi asynchronous 
 * dan akan di panggil ketika proses dinyatakan selesai dgn menggunakan konsep high order function
 */
//1.1Pola callback

function getUser1(isOffline, callback){
    setTimeout(() => {
        const user = ['harry', 'ron', 'hermione'];
        if(isOffline){
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }
        callback(null,user);
    }, 3000);
}

function userCallback(error,users){
    if(error){
        console.log('Process Failed ', error.message);
        return;
    }
    console.log('Process Success: ',users);
}
getUser1(false,userCallback);
getUser1(true,userCallback);

// 2. Callback Hell => problem if using callback
/**
 * Masalah akan timbul ketika sebuah proses asynchronous perlu dijalankan 
 * setelah tahapan serupa lainnya selesai. Proses pemanggilan callback yang berulang sangat menyiksa
 */

const {getUser, getWeather} = require('./utils_callback.js');

function getuserWeather(userId, callback){
    getUser(userId, (error, user) => {
        if(error){
            callback(error, null);
            return;
        }
        getWeather(user.location, (error, weather) => {
            if(error){
                callback(error, null);
                return;
            }
            callback(null, {...user, ...weather});
        });
    })
}
getuserWeather(1, (error, userWeather)=>{
    if(error){
        console.log(error.message);
        return;
    }
    console.log("Hell:\n",userWeather);
})
/**
 * Output:
 * Hell:
 {
  id: 1,
  name: 'John Doe',
  location: 'Jakarta',
  weather: 'Sunny',
  temperature: 30
}
Process Success:  [ 'harry', 'ron', 'hermione' ]
Process Failed  cannot retrieve users due offline

Hell => duluan outputnya keluar dengan delay 1000 dibandingkan proses sebelumnya yg delay 3000
 * 
 */
