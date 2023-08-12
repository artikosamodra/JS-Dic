//Constructor Overriding
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    //method lain
    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}


class WhatsAppService extends MailService {
    //overriding constructor
    constructor(sender, isBusiness) {
        super(sender);
        /* jika penulisan :
        || this.sender = sender; || artinya melewatkan super >> || super(sender) = sender; ||
        maka outputnya = "ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor"
        */

        this.isBusiness = isBusiness;
    }
}

const whatsapp = new WhatsAppService('+00000', true);
whatsapp.sendMessage('Melewatkan super', '+010101');

class WhatsAppService1 extends MailService {
    //overriding constructor
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }

    //overriding method
    sendMessage(message, receiver) {
        super.sendMessage(message, receiver);
        console.log('message sent via WhatsApp')
    }
}

const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService1('+00000', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+00000');