// Greeting!
let name = prompt("hiiii, what is your name?☺️");
alert("weeelcoomee " + name + ", it's a pleasure to meet you!😌");

// Numerical input
//let numInput = prompt("Please enter a value:");  // this value is a String
//let num = Number(numInput);  // convert it to a number

// Do something with it
//let squared = num * num;
//alert("If you square the value " + num + ", you obtain " + squared);

//age
let age = prompt("how old are you?🤔");
age = Number(age);
let birthYear = 2026 - age;
alert("in that case, you must have been born around " + birthYear + ", right? 🤩");
  
// temperature 
let tempF = prompt("what is the current temperature in F?");
tempF = Number(tempF);
let tempC = (tempF - 32) * 5/9;
tempC = Math.round(tempC);
alert("well, " + tempF + " F would be " + tempC + " in C! 🌡");

//number show
let num1 = prompt("please enter an integer value:");
num1 = Number(num1);
let num2 = prompt("please enter a second integer value:");
num2 = Number(num2);
  
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;
let maxNum = Math.max(num1, num2);
let minNum = Math.min(num1, num2);

//show calculations
alert("😈let me show you what I can do with the numbers " + num1 + " and " + num2 + ":");
alert(num1 + "+" + num2 + "=" + sum);
alert(num1 + "-" + num2 + "=" + difference);
alert(num1 + "*" + num2 + "=" + product);
alert(num1 + "/" + num2 + "=" + quotient);
alert(num1 + "%" + num2 + "=" + remainder);
alert("the max of " + num1 + " and " + num2 + " is " + maxNum);
alert("the min of " + num1 + " and " + num2 + " is " + minNum);

//fav number 
let favNumber = prompt("sooo, what's your favorite number?🙃");
favNumber = Number(favNumber);
let squared = favNumber * favNumber;
let cubed = favNumber * favNumber * favNumber;
alert("fun fact: " + favNumber + " squared is " + squared + " and cubed is " + cubed + "! ");
  
// bye bye
alert("thanks for chatting with me, " + name + "! 😇Have a great day!");