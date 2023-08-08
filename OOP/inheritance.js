//CASE 1 - terdapat duplikasi kode
class WhatsAppService {
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}
const whatapps = new WhatsAppService('+00000');
whatapps.sendMessage('Helo..', '+6281234567890'); //output: +00000 sent Helo.. to +6281234567890
whatapps.sendBroadcastMessage('ini text broadcastnya', ['+6281234567890', '++6281234567899']); //output:

class EmailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}
const email = new EmailService('pengirim@gmail.com');
email.sendMessage('Helo..', '@artiko.game@gmail.com'); //output:
email.sendDelayedMessage('Ini isi emailnya', ['@artiko.game@gmail.com', 'penerima@gmail,.com']); //output: 
/*
catatan.
kode di atas tidak efisien karena terdapat duplikasi code.
solusinya dengan inheritance atau pewarisan, dicontohkan pada case 2
*/
//===========================================

