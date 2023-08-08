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
whatapps.sendBroadcastMessage('ini text broadcastnya', ['+6281234567890', '++6281234567899']); /*output:
+00000 sent ini text broadcastnya to +6281234567890
+00000 sent ini text broadcastnya to ++6281234567899
*/

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
email.sendMessage('Helo..', '@artiko.game@gmail.com'); //output:pengirim@gmail.com sent Helo.. to @artiko.game@gmail.com
email.sendDelayedMessage('Ini isi emailnya', ['@artiko.game@gmail.com', 'penerima@gmail,.com']); //output: pengirim@gmail.com sent Ini isi emailnya to @artiko.game@gmail.com,penerima@gmail,.com
/*
catatan.
kode di atas tidak efisien karena terdapat duplikasi code.
solusinya dengan inheritance atau pewarisan, dicontohkan pada case 2
*/
console.log("=================");
//===========================================


//CASE 2 - Inheritance/Pewarisan dengan superclass

//SuperClass - Mail (Inheritance)
class MailService { //class MailService akan diwariskan
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

//Subclass WhasstApp
class WhatsAppService1 extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

//Subclass Email
class EmailService1 extends MailService{
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver)
        }, delay);
    }
}

const whatsapp1 = new WhatsAppService1('+000001');
const email1 = new EmailService1('pengirim@gmail.com');

whatsapp1.sendMessage('Ini Text Pesan', ' + 111111'); //output: +000001 sent Ini Text Pesan to  + 111111
whatsapp1.sendBroadcastMessage('Ini Isi Broadcast', ['+111111', '+222222', '+333333']); /*output: 
+000001 sent Ini Isi Broadcast to +111111
+000001 sent Ini Isi Broadcast to +222222
+000001 sent Ini Isi Broadcast to +333333
*/

email1.sendMessage('Ini Isi Email', 'artiko.game@gmail.com'); //output: pengirim@gmail.com sent Ini Isi Email to artiko.game@gmail.com
email1.sendDelayedMessage('Ini Isi Email', ['artiko@gmail.com', 'fajar@gmail.com', 'samodra@gmail.com'], 1000); //output: pengirim@gmail.com sent Ini Isi Email to artiko@gmail.com,fajar@gmail.com,samodra@gmail.com
