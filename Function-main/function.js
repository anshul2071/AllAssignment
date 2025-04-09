//A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.







//Simple function through which we can print 2x the given number using .map array method
function doubleNum (arr) {
    return arr.map((num) => {
        
        return num*2;
    })
}

console.log(doubleNum([1,2,4,5,6,7]));



// function to print even number using .filter array method
function filterNum (arr) {
    return arr.filter((num) => {
        return num%2 == 0;
    })
}

console.log(filterNum([1,2,3,4,7,8,6,10,12,14,17,15]));



function findSquare (num) {
    return num*num;
}

console.log(findSquare(5));




function isPangram (sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercased = alphabet.toLowerCase();


    return[...alphabet].every(letter => lowercased.includes(letter));
}

console.log(isPangram("my name is anshul rawal"));



function firstCalculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default: return "Invalid operator";
    }
}

console.log(firstCalculator(5,6,'+'));


//calculator that takes input
function calculator() {
    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));
    const operator = prompt("Enter operator (+, -, *, /):");

    const result = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num2 !== 0 ? num1 / num2 : "Error: Division by zero"
    }[operator] || "Invalid operator";

    alert(`Result: ${result}`);
}


calculator();

//arrow function for square
const square = ( ) => {
    let num = prompt("Enter the value");
    return num*num;

       
}

let result = square();

console.log(`Result: ${result}`)



// function to all the digits in an array using reduce array method

const sumOfAll = (arr) => {
    return arr.reduce((num1, num2) => {

        return num1 + num2; 
    })
}

console.log(sumOfAll([1,2,3,4,5,6,7]));







//arrow function for string reversal

const reverseString  = (str) => 
    str.length <= 1 ? str : reverseString(str.slice(1)) + str[0];

console.log(reverseString("hello"));