/* 6. Vowel Counter

We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate 
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e 
counted  */

function countvowels(name){
    //Define an array of vowels
    const vowels = ['a','e','i','o','u'];
    let vowelCount = 0;     

    //iterate through each character in the name
    for(let char of name.toLowerCase()){
        //check if the character is a vowel
        if(vowels.includes(char)){
            vowelCount++;
        }
    }
    return vowelCount;
}

const name = "jhone DonE";
console.log("Number of vowels in the name:", countvowels(name));