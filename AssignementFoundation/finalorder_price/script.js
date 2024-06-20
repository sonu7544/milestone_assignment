/* 4. Calculate the final order price

A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of 
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on 
the unit price and quantity of each item. */

const calculateTotalCost = (customerCart) => {
    //Intialize Total cost
    let totalCost = 0;

    // Calculate total cost of each item and add to total cost
    customerCart.forEach(item => {
        totalCost += item.unitPrice * item.quantity;
    });
    return totalCost;
};

const customerCart = [
    {unitPrice : 10, quantity: 2}, //Item 1: Unit price = 10, Quantity = 2
    {unitPrice : 15, quantity: 1}, //Item 2: Unit price = 15, Quantity = 1
    {unitPrice : 20, quantity: 3}  //Item 3: Unit price = 20, Quantity = 3
];
const totalCost = calculateTotalCost(customerCart);
console.log("Total cost of items in the cart:", totalCost);