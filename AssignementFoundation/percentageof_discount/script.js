/*15. Calculate the percentage of the discount

A retail store is offering a discount on its products and wants to calculate the percentage of the discount to 
show customers how much they can save. Given the original price and the discounted price of a product, 
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. 
This function could be useful for the store's marketing team to create promotions and offers that attract 
customers. */

const calculateDiscountPercentage = (originalPrice, discountPrice) => {
    // Calculate the difference between original price and discounted price
    const discountAmount = originalPrice - discountPrice;

    // Calculate the percentage of the discount
    const discountPercentage = (discountAmount / originalPrice) * 100;

    // Round off the discount percentage to two decimal places
    return discountPercentage.toFixed(2);
};

const originalPrice = 100;
const discountPrice = 80;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountPrice);
console.log("Discount percentage : ", discountPercentage + "%"); 


