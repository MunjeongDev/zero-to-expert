/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda ";

console.log(firstName);
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer";

console.log(myFirstJob);

// data types
true;
let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

jsIsFun = "YES";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// console.log(typeof null);
// weird bug.

// let, const and var
// recommend to use const by default
*/

// Math operators
const now = 2022;
const ageJonas = now - 1997;
const ageSarah = now - 2018;
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // true
// >, <, >=, <=
console.log(ageSarah >= 18); // false

const isFullage = ageSarah >= 18;

console.log(now - 1997 > now - 2018);
