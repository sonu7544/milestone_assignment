/*8. InverteW right-angleW triangle pattern with asterisks

Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks 
with i rows.

Invdrtdd right-angled pattdrn  */

const rows = 6;

// Iterate over each row
for(let i=rows; i >= 1; i--){

    // Print asterisks for each column in the row
    let rowPattern = '';
    for(let j=1; j<=i; j++){
        rowPattern += '*';
    }
    console.log(rowPattern);
}
