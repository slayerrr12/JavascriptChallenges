

Functions are used to encapsulate and reuse blocks of code that may be executed multiple times throughout a program. They promote code organization, modularity, and reusability.




1. Function Declaration/statement:

javascript
Copy code
function func1() {
  // Body of the function
}
A function declaration starts with the function keyword followed by the function name. Function declarations can be used even before they are declared in the code (hoisting).




2. Calling/Invoking/Function Call/Running a Function:

javascript
Copy code
func1();
To call or invoke a function, use the function name followed by parentheses (). This executes the code inside the function. If the function requires arguments, they should be passed within the parentheses.




3 .Function Expression:

javascript
Copy code
const a = function(param1, param2) {
  // Body of the function
};


A function expression involves assigning a function to a variable (a in this case). Function expressions treat functions as values that can be assigned, passed as arguments, or returned from other functions. Function expressions must be defined before they are called, unlike function declarations.

These enhanced notes highlight the key concepts of functions in JavaScript, including function declarations, function calls, and function expressions. Functions are powerful tools for structuring code and making it reusable and maintainable.