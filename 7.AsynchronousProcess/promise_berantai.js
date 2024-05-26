/**
 * Promise Berantai => menyelesaikan masalah 
 * pada callback hell (tejadi ketika permasalahan asynchrnous yang menunggu proses selanjutnya)
 */

function withDrawMoney(amount){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(amount > 100){
                reject(new Error(`Cannot withdraw ${amount}`)) // menuju langsung Ke catch
            }
            resolve(amount); //Then akan berlanjut ke proses berikutnya & sebagai nilai di argumen selanjutnya 
        },1000)
    })
}

function buyCinemaTicket(money){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(money <10){
                reject(new Error(`Cannot buy ticket with ${money}`));
            }
            resolve(`ticket-1`); //ticker berkurang satu sebagai argumen di function selanjutnya
        },1000)
    })
}

function goInsideCinema(ticket){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!ticket){
                reject(new Error(`Cannot go inside with ${ticket}`));
            }
            resolve(`Enjoy cinema with ${ticket}`);
        },1000)
    })
}

function watchMoview(){
    withDrawMoney(10)
        .then((amount)=>{
            return buyCinemaTicket(amount);
        })
        .then((ticket)=>{
            return goInsideCinema(ticket);
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error.message);
        })//jika salah satu dari step then itu gagal
}
// function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => buyCinemaTicket(money))
//       .then((ticket) => goInsideCinema(ticket))
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error.message));
//   }

watchMoview()