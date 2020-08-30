//Program to display only elements containing 'a' in them from a array

console.log("Hello This is question 4");
console.log("The question is :" + ' Program to display only elements containing "a" in them from a array');

var arrayOfStrings = ["html", "css", "javascript", "php", "nodejs", "jquery", "mysql", "sql", "angular", "react", "vue"];

console.log("Check the list, list is given below :) ");
console.log(arrayOfStrings);

console.log("The elements containing 'a' in the array of strings are :) ");

for(let x=0; x < arrayOfStrings.length; x++){
    var tempString = arrayOfStrings[x];
    if(tempString.indexOf('a') != -1){
        console.log("index possisions are : " + "'" + arrayOfStrings.indexOf(tempString) + "'" + " value = " + arrayOfStrings[x]);
    }
}