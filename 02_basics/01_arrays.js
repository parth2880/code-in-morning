// arrays

const myarr =  [1, 2, 5, 4, 8, 9];

// console.log('A = ',myarr);

const myn1 = myarr.slice(1,3)
// console.log('B =',myn1);
// console.log(myarr)

// splice

const myn2 = myarr.splice(1,3)
// console.log('C =',myn2);
// console.log(myarr)


//array in one 
let allarr = [1, 3, 4, 5, [3, 4], 6, [8, 9, [4, 6]]]

let arrone = [4, 5, 6, 7, 8]

let arrtwo = [4, 9, 2, 1]

// arrone.push(arrtwo);
// console.log(arrone);

// const a = arrone.concat(arrtwo);
// console.log(a);

// const newarr = allarr.flat(Infinity)
// console.log(newarr);

// spread

const newbig = [...arrone, ...arrtwo]
console.log(newbig);

console.log(Array.isArray('parth')); //false

console.log(Array.from('parth'))

console.log(Array.from({'parth': 'one'}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));