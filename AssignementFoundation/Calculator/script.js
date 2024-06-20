/*  2. Calculator

Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement 
to perform the operation on the two num#ersQ
The calculator function should"
L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical 
operation and store the result in a varia#le called resultP
L If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ     */




function calculator(num1, num2, operator){
    let result;
    
    switch(operator){
        case '+':
            result = num1+num2;
            break;

        case '-':
            result = num1-num2;
            break; 
            
        case '*':
            result = num1*num2;
            break;  
            
        case '/':
            result = num1/num2;
            break;
            default:

            console.log("invalid operator");
            return;
    }
    console.log("reault : ", result);
}

// Example usage:
calculator(5, 3, '+'); // Output: Result: 8
calculator(10, 4, '-'); // Output: Result: 6
calculator(6, 2, '*'); // Output: Result: 12
calculator(20, 4, '/'); // Output: Result: 5
calculator(10, 0, '/'); // Output: Result: Infinity
calculator(5, 3, '%'); // Output: invalid operator