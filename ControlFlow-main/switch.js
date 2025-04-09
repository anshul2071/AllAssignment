
  // -----Switch Operation---- //
// A switch statement is used to perform different actions based on different conditions. It compares a given value against multiple possible cases and executes the matching block of code.
 
//example

const num1 = Number(prompt("Enter the number: "));
 const operators = prompt("Enter Operation to perform (+,*,/,-):");
 const num2 = Number(prompt("Enter the number: "));
 
 let result;
 
 
 switch(operators){
     case "+":
         result = num1 + num2;
         break;
 
     case "-":
         result = num1-num2;
         break;
 
     case "*":
         result = num1*num2;
         break;
 
     case "/":
         if (num2 !== 0){
             result = num1/num2;
         }
         else {
             result = "Error: Division by zero is not allowed";
             alert("not allowed")
         }
 
         break;
 
     default:
         result = alert("Invalid opertators");
     
 }
 
 console.log(`Result : ${result}`)
 