// FIRST ASSIGNMENT

// Calculate the area of two triangles
// Compare the values of the result to see which one has the biggest area
// Code one example for each test data that you are provided
// One case (code example) for the first test data, one for the second and so on.
// Use template literals to output the result to the console

// Formula for calculating the area of a triangle:
// area = (base * height) /2

// Code an example for each case of test data.
// Hand in a link to your GitHub repo for your assignment and don't
// forget to answer the question above.

// 1. Make sure I know how to calculate the area of a triangle
// 2. Calculate one triangles area and make sure the formula works and the
// correct result shows in the console.
// 3. Compare both results and output it to the console. Make sure to output
// which one that has the biggest area.



// Case 1
// triangleOne: base = 10cm, height = 13cm
// triangleTwo: base = 16,5cm, height = 20,3cm

// One
let largestTriangle = "";

let xOne = 10;
let yOne = 13;
let triangleOne = (xOne * yOne) / 2;

console.log(triangleOne);

// Two
let xTwo = 16.5;
let yTwo = 20.3;
let triangleTwo = (xTwo * yTwo) / 2;

console.log(triangleTwo);

// Comparison
if (triangleOne > triangleTwo) {
    largestTriangle = "Triangle One";
} else if (triangleTwo > triangleOne) {
    largestTriangle = "Triangle Two";
}

// Which triangle has the biggest area?
console.log(`Triangle One has an area of ${triangleOne} cm2 and Triangle Two has 
an area of ${triangleTwo} cm2. The triangle with the biggest area is ${largestTriangle}.`);



// Case 2
// triangleThree: base = 16,5cm, height = 20,3cm
// triangleFour: base = 20,3cm, height = 16,5cm

// Three
let xThree = 16.5;
let yThree = 20.3;
let triangleThree = (xThree * yThree) / 2;

console.log(triangleThree);

// Four
let xFour = 20.3;
let yFour = 16.5;
let triangleFour = (xFour * yFour) / 2;

console.log(triangleFour);

// Comparison
if (triangleThree > triangleFour) {
    largestTriangle = "Triangle Three";
} else if (triangleFour > triangleThree) {
    largestTriangle = "Triangle Four";
} else (triangleThree === triangleFour); {
    largestTriangle = "have the same area";
}

// Which triangle has the biggest area?
console.log(`Triangle Three has an area of ${triangleThree} cm2 and Triangle Four has 
an area of ${triangleFour} cm2. The triangles ${largestTriangle}.`);



// Case 3
// triangleFive: base = 7,8cm, height = 5,6cm
// triangleSix: base = 9,3cm, height = 12,4cm

// Five
let xFive = 7.8;
let yFive = 5.6;
let triangleFive = (xFive * yFive) / 2;

console.log(triangleFive);

// Six
let xSix = 9.3;
let ySix = 12.4;
let triangleSix = (xSix * ySix) / 2;

console.log(triangleSix);

// Comparison
if (triangleFive > triangleSix) {
    largestTriangle = "Triangle Five";
} else if (triangleSix > triangleFive) {
    largestTriangle = "Triangle Six";
}

// Which triangle has the biggest area?
console.log(`Triangle Five has an area of ${triangleFive} cm2 and Triangle Six has 
an area of ${triangleSix} cm2. The triangle with the biggest area is ${largestTriangle}.`);



// Answer the question why JavaScript needs the parentheses in this
// case? You can put your answer as plain text when you hand in the
// assignment.


// JavaScript knows what to calculate first because of Operator Precedence.
// It determines how operators should be "read". 
// In the precedence table there are 21 numbers where 21 is the highest and 1 is the lowest. 
// The highest numbers gets evaluated/calculated first. 
// The addition and subtraction operator ('+' '-') has precedence number 12.
// The multiplication and division operator ('*' '/') has precedence number 13.
// The grouping operator '()' has precedence number 19.
// In this case we needed to add the parentheses (grouping operator) to make 
// sure that the * got calculated before /. 

// I don't know if I did anything wrong cause the calculation worked
// with or without the parentheses... ://