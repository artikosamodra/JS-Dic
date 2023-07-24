//function
function greeting() {
    console.log("Good Morning!") //output: Good Morning!
}
greeting();

//funtion+params with if-else
function isGreeting(name, language) {
    if (language === "English") {
        console.log(`Good Morning ${name}!`)
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`)
    } else {
        console.log(`Selamat Pagi ${name}!`)
    }
}

isGreeting("Artiko", "English"); //output: Good Morning Artiko!

//mengembalikan sebuah nilai dari fuction
function multiply(a, b) {
    return a * b;
}
let result = multiply(10, 2)
console.log(result) //output: 20

//menggunakan return agar nilai function dapat dikembalikan
function food(yourname, foodname) {
    if (foodname === "Bakso") {
        return `${yourname} pesan bakso`;
    } else if (foodname === "Soto") {
        return `${yourname} pesan soto`;
    } else {
        return `${yourname} pesan seblak`;
    }
}
let foodmessage = food("Artiko", "Soto");
console.log(foodmessage); //output: Artiko pesan soto

//expression fuction
const mygreet = function (inName, inLanguage) {
    if (inLanguage === "Inggris") {
        return "Good Morning " + inName + "!";
    } else if (inLanguage === "Perancis") {
        return "Bonjour " + inName + "!";
    } else {
        return "Selamat Pagi " + inName + "!";
    }
}
console.log(mygreet('Artiko', 'Inggris')); //output: Good Morning Artiko!
