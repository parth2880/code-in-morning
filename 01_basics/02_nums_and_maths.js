const score = 100
// console.log(score);

const balance = new Number(100.0304)
// console.log(balance); // 100

// console.log(balance.toString())     // "100"
// console.log(typeof balance.toString)    // function

// console.log(balance.toFixed(2));

const otherNum = 124.444

// console.log(otherNum.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-Us')); //    $1,000,000
// console.log(hundreds.toLocaleString('en-In'));  //  ₹1,000,000

// ++++++++++++++ Maths ++++++++++++++++

console.log(Math);

// console.log(Math.round(2.56789));      // 3
// console.log(Math.ceil(2.56789));       //  3 
// console.log(Math.floor(2.56789));      //    2

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random());
console.log(Math.floor(Math.random() * (max - min + 1) + min));