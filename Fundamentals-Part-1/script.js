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

//Operator Precedence
let x, y; //undefined
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); // 10, 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1
/* BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter)

1. Store Marks's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. CReate a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1 : Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
*/

const marksMassD1 = 78;
const marksHeightD1 = 1.69;
const johnMassD1 = 92;
const johnHeightD1 = 1.95;

const marksBmiD1 = marksMassD1 / (marksHeightD1 * marksHeightD1);
const johnBmiD1 = johnMassD1 / (johnHeightD1 * johnHeightD1);

console.log(marksBmiD1, johnBmiD1);
let markHigherBMI = marksBmiD1 > johnBmiD1;
console.log(markHigherBMI);

/*TEST DATA 2 : Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall. */

marksMassD2 = 95;
marksHeightD2 = 1.88;
johnMassD2 = 85;
johnHeightD2 = 1.76;
marksBmiD2 = marksMassD2 / (marksHeightD2 * marksHeightD2);
johnBmiD2 = johnMassD2 / (johnHeightD2 * johnHeightD2);
console.log(marksBmiD2, johnBmiD2);
markHigherBMI = marksBmiD2 > johnBmiD2;
console.log(markHigherBMI);
