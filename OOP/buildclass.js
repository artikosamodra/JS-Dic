//class bawaan >> Date
const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
});

const timeInTokyo = date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
});

const timeInMakassar = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Makassar',
});

console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
//===================================================================

//class bawaan >> Array
class UniqueArray extends Array { //UniqueArray class buatan kita extends untuk memanggil superclass 'Array' bawaan JS
    constructor(...args) {
        const uniqueValue = args.filter((item, index) => args.indexOf(item) === index); //filter array agar unik atau tidak duplikat.

        super(...uniqueValue); //super dipanggil untuk menhindari "error Reference....."
    }

    //push merupakan method pada class 'UniqueArray'. bisa juga dengan pop, splice, shift, unshift dan lainnya.
    push(item) {
        if (!this.includes(item)) {
            super.push(item);
        }
    }
}

const someArray = new UniqueArray('a', 'b', 'c', 'c', 'b', 'a', 'd');
console.log(someArray); //output: UniqueArray(6) [ 'a', 'b', 'c', 'd' ]
someArray.push('e'); 
console.log(someArray); //output: UniqueArray(6) [ 'a', 'b', 'c', 'd', 'e' ]
someArray.push('d');
console.log(someArray); //output: UniqueArray(6) [ 'a', 'b', 'c', 'd', 'e' ]
someArray.push('f');
console.log(someArray); //output: UniqueArray(6) [ 'a', 'b', 'c', 'd', 'e', 'f' ]