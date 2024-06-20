/* 5. Capitalize

You are #uilding a form where users can enter their names. You want to make sure that the first letter of the 
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a 
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and 
returns the modified string. Otherwise, it returns the original string without any changes  */

function capitalizeName(name){
    // Check if the first letter is lowercase
    const modifieName = (name[0].toLowerCase() === name[0]) ? 
    name.charAt(0).toUpperCase() + name.slice(1) : name;

    return modifieName;
}
const userName1 = "jhone";
const userName2 = "Alok";

console.log(capitalizeName(userName1));
console.log(capitalizeName(userName2));  


