//object-propr
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine" //object property, pemanggilan var diikuti dengan bracket 'var.[prop]'
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
/*
output:
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/
console.log("====================");
//============================================================

//assignment operator (=) untuk mengubah nilai property
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    "max Speed": 1200,
    color: "Light gray"
};
//pemanggilan property spaceship.x ini ada 2 tujuan yaitu menambah property baru, atau merubah nilai pada property yang sudah ada.
//spaceship = { name: "New Millenium Falcon" }; //error
spaceship.name = "New Millenium Falcon" //agar tidak error, tidak menggunakan kurawal '{}' seperti diatas.
spaceship.color = "Glossy red";
spaceship["max Speed"] = 1300; //penulisan spaceship["max Speed"] jika properti memiliki symbol atau spasi. jika tidak boleh memakai dot '.' (spaceship.maxSpeed)
spaceship.class = "Light freighter";

//menghapus property >> misal kita hapus manufacturer
delete spaceship.manufacturer;


console.log(spaceship);

/*
jika tidak ada opsi delete
output:
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}

jika delete digunakan. maka manufacturer dihapus dari property spaceship
output:
{
  name: 'Millenium Falcon',
  maxSpeed: 1300,
  color: 'Glossy red'
}
*/





