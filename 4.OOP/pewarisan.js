// Superclass
class mailService{
    constructor(sender){
        this.sender = sender
    }
    sendMessage(meesage,receiver){
        console.log(`${this.sender} sent ${meesage} to ${receiver}`)
    }
}

// Subclass
class whatShapServices extends mailService{
    sendBroadcastMessage(message, receivers){
        receivers.forEach((receiver) => {
            this.sendMessage(message,receiver); //Inheritance function
        });
    }
}

class emailService extends mailService{
    sendDelayedMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message,receiver) //Inheritance function
        }, delay);
    }
}

const whatSapp = new whatShapServices('082147379372');
const email = new emailService('teguhpermana096@gmail.com');

whatSapp.sendMessage('hello','082147379372'); //inheritance function from superclass
whatSapp.sendBroadcastMessage('hello', ['082147379372','082147379373','082147379374']); //Main function

// whatSapp.sendDelayedMessage('hello', '082147379372', 1000); // whatSapp.sendDelayedMessage is not a function

email.sendMessage('hello','abdul@gmail.com');
email.sendDelayedMessage('hello', 'abdul@gmail.com', 1000);

// email.sendBroadcastMessage('hello', ['082147379372','082147379373','082147379374']); //email.sendBroadcastMessage is not a function

//  Pewarisan with prototype
// Superclass
function mailService_prototype(sender){
    this.sender=sender;
}
mailService_prototype.prototype.sendMessage = function(message,receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}

function whatsAppService_prototype(sender){
     mailService_prototype.call(this,sender);
}
// Prototpype inheritance
whatsAppService_prototype.prototype = Object.create(mailService_prototype.prototype);
whatsAppService_prototype.prototype.constructor = whatsAppService_prototype;

whatsAppService_prototype.prototype.sendBroadcastMessage = function(message, receivers){
    receivers.forEach((receiver) => {
        this.sendMessage(message,receiver); //Inheritance function
    });
}


function EmailService_prototype(sender){
    this.sender=sender;
}
EmailService_prototype.prototype.sendDelayedMessage = function(message, receiver, delay){
    setTimeout(() => {
        this.sendMessage(message,receiver) //Inheritance function
    }, delay);
}
// Pewarisan with prototype
emailService_prototype.sendDelayedMessage = function(message, receiver, delay){
    setTimeout(() => {
        this.sendMessage(message,receiver) //Inheritance function
    }, delay);
}