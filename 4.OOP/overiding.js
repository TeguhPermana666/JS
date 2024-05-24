/**
 * Overriding => Subclass dapat mendefinisikan implementasi 
 * dari fungsi yang ada di superclass
 * 
 */

// Constructor Overriding -> Method yang di panggil pada saat pembuatan instance
class MailService{
    constructor(sender){
        this.sender = sender;
    }
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppService extends MailService{
    constructor(sender,isBuisness){
        // this.sender = sender; Error bcs we want edit sender from parent to subclass
        super(sender); //Load the parent constructor, must call super()
        this.buisness = isBuisness
    }
    // Overriding method
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    }
    // Overriding method
    // sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    //     super.sendMessage(message, receiver);

    // console.log('message sent via WhatsApp');
    // }

}

// call the constructor
const mailService = new MailService('someReceiver');
const whatsapp = new WhatsAppService('someReceiver',true);

mailService.sendMessage('Hello', 'someReceiver');
whatsapp.sendMessage('Hai, Apa kabar bro?', '+6281234567890');
// console.log(whatsapp);
// console.log(mailService)
