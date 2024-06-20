/*1. Password Validator

Write a JavaScript program that checks if the entered password matches the confirmed password. If the 
passwords match, the program should log "Password Matched. Password validation Successful." to the console. 
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.log  */



//prompting the user to enter a password and confirmed password
let password = prompt("Enter your password : ");
let confirmpassword = prompt("confirm your password : ");

//checking if the password  match
if(password === confirmpassword){
    console.log("Password Matched. Password validation Successful.");
}
else{
    console.log("Password didn't Matched. Password validation unSuccessful.");
}