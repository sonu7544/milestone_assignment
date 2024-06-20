/* 13. Bill splitter

A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of 
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing 
it and returns an object that contains the total bill and the bill to be paid by each person in the group. */

function calculateBillPerPerson(costPerDish,numberOfPeople){
    // Calculate total bill
    const totalBill = costPerDish.reduce((acc,curr) => {
        return acc+curr;
    });

    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeople;
    
    // Return an object containing total bill and bill per person
    return{
        totalBill : totalBill,
        billPerPerson : billPerPerson
    };
}

const costPerDish = [25, 30, 15, 20];//cost of each dish
const numberOfPeople = 4;//number of people sharing the bill
const billDetails = calculateBillPerPerson(costPerDish,numberOfPeople);
console.log("Total bill : ", billDetails.totalBill);
console.log("Bill per person : ", billDetails.billPerPerson); 
