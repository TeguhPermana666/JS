import {coffeStock,isCoffeMachineReady} from './es6_module.js'; //Destructuring object
const displaySock = (stock) =>{
    for (const coffe in stock){
        console.log(coffe, stock[coffe], isCoffeMachineReady);
    }
}

displaySock(coffeStock);