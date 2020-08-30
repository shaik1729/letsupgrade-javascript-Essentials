//Program to search for a particular character in a string

console.log("Hello This is question 1");
console.log("The question is :" + ' Program to search for a particular character in a string');

var someText = "abcdefghijklmnopqrstuvwxyz";

console.log("The string is : abcdefghijklmnopqrstuvwxyz");

var finding_char = prompt("Enter a character to find");

let indexPosition = someText.indexOf(finding_char);
console.log(`The ${finding_char} is at index  = ` + indexPosition);