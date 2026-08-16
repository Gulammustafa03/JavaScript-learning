let score=33
console.log(typeof score);
console.log(typeof (score));

let score1="33"
console.log(typeof score1);
let value=Number(score1);     // string to number
console.log(typeof value);

let score2="33abc"
let value2=Number(score2);    // string to number
console.log(typeof value2);   // Number
console.log(value2);      // NaN

let score3=null
let value3=Number(score3);     // null to number
console.log(typeof value3);  // Number
console.log(value3);    // 0

let score4=undefined
let value4=Number(score4);     // undefined to number
console.log(typeof value4);    // Number
console.log(value4);    // NaN

/*
<----Important Note:---->
    "33" => 33
    "33abc" => NaN
    null => 0
    undefined => NaN
    true => 1   false => 0

*/

let isLoggedIn=1

let value5=Boolean(isLoggedIn)    // number to boolean
console.log(typeof value5);     // boolean
console.log(value5);    // true

let isLoggedIn1=0
let value6=Boolean(isLoggedIn1)    // number to boolean
console.log(typeof value6);      // boolean
console.log(value6);    // false

let isLoggedIn2=""
let value7=Boolean(isLoggedIn2)    // string to boolean
console.log(typeof value7);    // boolean
console.log(value7);    // false

let isLoggedIn3="abc"
let value8=Boolean(isLoggedIn3)    // string to boolean
console.log(typeof value8);    // boolean
console.log(value8);    // true


/*
<----Important Note:---->
    1 => true
    0 => false
    "" => false
    "abc" => true
*/

let num=123
let value9=String(num)    // number to string
console.log(typeof value9);  // string
console.log(value9);    // "123"

