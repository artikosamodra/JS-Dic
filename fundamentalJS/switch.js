/*
switch statement
 switch (expression) {
    case value1:
        isi dari value1
        break;

    case value2:
        isi dari value2
        break;
    ...
    ...
    (dan seterusnya.lalu diakhiri dengan)
    default:
        isi dari default
}
*/

//Example: Switch 1
let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning";
        break;
    case "French":
        greeting = "Bonjour";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu";
        break;
    default:
        greeting = "Selamat pagi"
}
console.log(greeting); //output: Bonjour