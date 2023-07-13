//for loop
for (let h = 0; h < 5; h++) {
    console.log(h);
}

/*
output:
0
1
2
3
4
*/
//=======================================================

//for-of loop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for (const arrayItem of myArray) {
    console.log(arrayItem)
}
/* output
Luke
Han
Chewbacca
Leia
*/
//=======================================================

//while
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}
/*
output:
1
2
3
4
...
98
99
100
*/
//=======================================================

//do-while
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 100);
/*
output:
1
2
3
4
...
98
99
100
*/
//=======================================================

/*
//Infinite loops-While
let k = 1;

while (k <= 5) {
    console.log(k);
}

//Infinite loops-For
for (let l = 1; l <= 5; l = 1) {
    console.log(l);
}

loop ini mengulang tanpa ada batasan yang menyebabkan crash pada program
*/
