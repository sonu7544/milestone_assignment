/* 17. Build a banking application

A banking application needs to manage customer accounts and transactions. The user detail is stored in an 
object with a keys name and balance. Write functions using object methods to update a customer's account 
balance based on a deposit or withdrawal. */

//Define a customer object with name and balance properties
const customer = {
    name : "sonu",
    balance : 10000,

    //method to deposite money into the account
    deposit: function(amount){
        this.balance += amount;
        console.log(`successfully deposited Rs. ${amount}/-. updated balance: Rs. ${this.balance}/-`);
    },

    //method to deposite money from the account
    withdraw: function(amount){
        if(amount > this.balance){
            console.log("Insufficient funds!");
        }
        else{
            this.balance -= amount;
            console.log(`successfully withdraw Rs. ${amount}/-. updated balance: Rs. ${this.balance}/-`);
        }
    }
};

// Example usage:
console.log("Initial balance:", customer.balance);
customer.deposit(500); // Deposit Rs. 500/-
customer.withdraw(200); // Withdraw Rs. 200/-
customer.withdraw(2000); // Attempt to withdraw Rs. 2000/-