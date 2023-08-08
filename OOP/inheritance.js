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


//CASE 2 - Inheritance/Pewarisan dengan superclass dengan ES6

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

console.log("=================");
//===========================================

//Pewarisan tanpa ES6

//menggunakan function >> prototype inheritance
function MailService1(sender) {
    this.sender = sender;
}

MailService1.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}

function WhatsAppService2(sender) {
    MailService1.call(this, sender); //(this, sender) bukan (this.sender) karena hasilnya sender akan undefined
}

//prototype inheritance
WhatsAppService2.prototype = Object.create(MailService1.prototype);
WhatsAppService2.prototype.constructor = WhatsAppService2;

WhatsAppService2.prototype.sendBroadcastMessage = function (message, receivers) {
    for (const receiver of receivers) {
        this.sendMessage(message, receiver);
    }
}

function EmailService2(sender) {
    MailService1.call(this, sender); //artinya memanggil properti this.x dengan argumen sender
}

//prototype inheritance
EmailService2.prototype = Object.create(MailService1.prototype);
EmailService2.prototype.constructor = EmailService2;

EmailService2.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
        this.sendMessage(message, receiver);
    }, delay);
}

const whatsapp2 = new WhatsAppService2('+000000');
const email2 = new EmailService2('pengirim@gmail.com');

whatsapp2.sendMessage('Halo', '+081222333444'); //output: +000000 sent Halo to +081222333444
whatsapp2.sendBroadcastMessage('Ini Pesan Broadcast', ['+11111', '+22222', '+33333']); /*output:
+000000 sent Ini Pesan Broadcast to +11111
+000000 sent Ini Pesan Broadcast to +22222
+000000 sent Ini Pesan Broadcast to +33333
*/

email2.sendMessage('halo artiko', 'artiko.game@gmail.com'); //output: pengirim@gmail.com sent halo artiko to artiko.game@gmail.com
email2.sendDelayedMessage('Ini email delay', ['artiko@gmail.com', 'fajar@gmail.com', 'samodra@gmail.com'], 1000); //output: pengirim@gmail.com sent Ini email delay to artiko@gmail.com,fajar@gmail.com,samodra@gmail.com
console.log("===============");
//=============================

//Operator instanceof
/*
>> || operand1 instance of operand2
penjelasan
operand 1 : objek yang ingin di test prototypenya
operand 2 : merupakan constructor function atau class
*/

//example kita pakai test code dari "Pewarisan tanpa ES6"
console.log(whatsapp2 instanceof WhatsAppService2); //output: true
console.log(whatsapp2 instanceof EmailService2); //output: false
console.log(whatsapp2 instanceof MailService1); //output: true

console.log(email2 instanceof WhatsAppService2); //output: false
console.log(email2 instanceof EmailService2); //output: true
console.log(email2 instanceof MailService1); //output: true

/*
jika 'true' artinya prototype objek (operand1) memiliki hubungan dengan constructor/class (operand2) tersebut
jika 'false' artinya prototype objek (operand1) tidak memiliki hubungan dengan constructor/class (operand2) tersebut
*/
