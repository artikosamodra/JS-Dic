//function
function greeting() {
    console.log("Good Morning!")
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

isGreeting("Artiko", "English");