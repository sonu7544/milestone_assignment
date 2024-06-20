/* 4. Highest Marks

A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters 
the marks of all five students in an array called "marks". Write a program that iterates through the array and 
finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the 
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks */

function findhighestmarks(marks){
    // Assume the first student has the highest marks initially
    let highestmarks = marks[0];

     // Iterate through the array to find the highest marks
    for(let i=1; i<marks.length; i++){
        highestmarks = (marks[i] > highestmarks) ? marks[i] : highestmarks;
    }
    return highestmarks;
}
const marks = [85,90,80,95,75];
const highestmarks = findhighestmarks(marks);
console.log("highest marks scored by a student : ",highestmarks);