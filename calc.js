/* Marxian Split Calculator -- Each to their need receives, each to their ability pays.
Copyright 2017 Erik Thorelli
*/

var totalBill = prompt("What is the total amount of the bill?");
// Unneccessary right now -- var payer1 = prompt("What is the first payer's name?"); // TODO: store this for continual use w/o having to re-enter  - #user-friendly
var income1 = prompt("What is the first payer's annual income? "); // TODO: store this for continual use - #user-friendly
var income1Num = Number(income1); // anxious about the dynamic typing, probably uneccessary

// Unneccessary right now -- var payer2 = prompt("What is the second payer's name?");
var income2 = prompt("What is the second payer's annual income? ");
var income2Num = Number(income2);

var totalIncome = income1Num + income2Num;

var payer1Bill = income1Num / totalIncome * totalBill;
var payer2Bill = income2Num / totalIncome * totalBill;


console.log(payer1Bill);
console.log(payer2Bill);

/* 
//TEST for
var testTotalBill = Boolean(totalBill = payer1Bill + payer2Bill);
if (testTotalBill = true) {
    console.log(testTotalBill);
} else {
    console.log("totalBill != payer1Bill + payer2Bill! Uh oh!")
};
*/



//SKETCHING NOTES
/*psuedo code

var totalBill = [user input number]
var payer1 = [user input string]
var income1 = [user input number]
var payer2 = [user input string]
var income2 = [user input number]
(TODO: Make the declaration of incomes recursive, so unlimited amount of possible payers)

var totalIncome = income1 + income2

var payer1Bill = income1 / totalIncome * totalBill
var payer2Bill = income2 / totalIncome * totalBill

print "[payer1] need to pitch in [payer1Bill] and [payer2] needs to put up [payer2Bill]"
*/