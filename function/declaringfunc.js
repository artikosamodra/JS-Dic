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