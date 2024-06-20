/* 9. Check for Wivisibility.

Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2. 
Usd a for loop and continud statdmdnt. */

function printDivisibleByThreeNotByTwo(numbers){
    for(let num of numbers){
        if(num % 2 ===0){
            // Skip to the next iteration if divisible by 2
            continue;
        }

        // Check if the number is divisible by 3
        else if(num % 3 ===0){
            console.log(num);
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numbers divisible by 3 but not by 2:");
printDivisibleByThreeNotByTwo(numbers);