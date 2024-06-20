/* 7. Remove Duplicates

In an online shopping application, customers can add multiple items to their cart. However, sometimes 
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The 
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also 
affect the accuracy of the purchase order   */

function removeDuplicates(customerCart){
    //create a new set to store unique items
    let uniqueCart = new Set(customerCart);

    //convert the set back to an array
    uniqueCart = Array.from(uniqueCart);

    return uniqueCart;
}

const customerCart = ['item1','item2','item1','item3','item4','item2'];
const newCart = removeDuplicates(customerCart);
console.log("New cart without duplicates:",newCart); 


