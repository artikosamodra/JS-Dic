const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake","Pie","Donut"]
console.log(favorites); //output: [ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
console.log("==========");
//==================================

//spread
console.log(...favorites); //output: Seafood Salad Nugget Soup
//jika penulisan tidak menggunakan spread
console.log(favorites[0], favorites[1], favorites[2], favorites[3]); //lebih panjang, tidak efisien.
console.log("==========");
//==================================

//spread untuk menggabungkan array (favorites dan others)
const allFavorites1 = [favorites, others];
console.log(allFavorites1);
/*
output:
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/
console.log("==========");
//==================================

//penggabungan array dengan spread operator
const allFavorites2 = [...favorites, ...others];
console.log(allFavorites2);
/*
output:
[
  'Seafood', 'Salad',
  'Nugget',  'Soup',
  'Cake',    'Pie',
  'Donut'
]
*/
console.log("==========");
//==================================

//penggabungkan array dengan spread operator untuk literals
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);

/*
output:
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/







