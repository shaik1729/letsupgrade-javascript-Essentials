// Program to search for a element in a array of strings

console.log("Hello This is question 3");
console.log("The question is :" + ' Program to search for a element in a array of strings');

let arrayOfStrings = ["html", "css", "javascript", "php", "nodejs", "jquery", "mysql", "sql", "angular", "react", "vue"];

var enteredString = prompt("select a programming lang :) html, css, javascript, php, nodejs, jquery, mysql, sql, angular, react, vue");

let indexOfString = arrayOfStrings.indexOf(enteredString);

console.log(`The ${enteredString} is at the index of ${indexOfString}`);

console.log("Check the list, list is given below :) ");

console.log(arrayOfStrings);