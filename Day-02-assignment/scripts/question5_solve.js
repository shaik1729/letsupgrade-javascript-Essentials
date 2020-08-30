//Print an array in reverse order

console.log("Hello This is question 5");
console.log("The question is :" + ' Print an array in reverse order');

var arrayOfStrings = ["html", "css", "javascript", "php", "nodejs", "jquery", "mysql", "sql", "angular", "react", "vue"];

console.log("Check the list, list is given below :) ");
console.log(arrayOfStrings);

console.log("The elements in reverse order :) ");

for(let x=arrayOfStrings.length-1; x > -1; x--){
    var tempString = arrayOfStrings[x];
    console.log("index possisions are : " + "'" + arrayOfStrings.indexOf(tempString) + "'" + " value = " +arrayOfStrings[x]);
}