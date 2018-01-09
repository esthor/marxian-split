/* Marxian Split Calculator -- Each to their need receives, each to their ability pays.
Copyright 2017 Erik Thorelli
*/

//TODO - make a user-friendly web version accessible at unhype.me
//TODO - refactor to scope well; no global variable exposure
//TODO - user handling of payer creation (ability to 'add' a payer)
//TODO - graphical UI instead of pure JS

"use strict";

let totalBill = prompt("What is the total amount of the bill?");
let payer1 = prompt("What is the first payer's name?"); // TODO: store this for continual use w/o having to re-enter  - #user-friendly
let income1 = prompt(`What is ${payer1}'s annual income? `); // TODO: store this for continual use - #user-friendly
let income1Num = Number(income1); // making sure it's a number

let payer2 = prompt("What is the second payer's name?");
let income2 = prompt(`What is ${payer2}'s annual income?`);
let income2Num = Number(income2);

let totalIncome = income1Num + income2Num;

let payer1Bill = income1Num / totalIncome * totalBill;
let payer2Bill = income2Num / totalIncome * totalBill;


alert(`${payer1} should pay $${payer1Bill.toFixed(2)}` + "\n" + `${payer2} should pay $${payer2Bill.toFixed(2)}`);
//alert(payer2 + " should pay $" + payer2Bill.toFixed(2));

 
//TESTS
let testTotalBill = Boolean(totalBill = payer1Bill + payer2Bill);
if (testTotalBill = true) {
    console.log(testTotalBill);
} else {
    console.log("totalBill != payer1Bill + payer2Bill! Uh oh!")
};