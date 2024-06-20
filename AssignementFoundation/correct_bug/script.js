/*10. Correct a bug

You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd 
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is 
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to 
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart 
array to corrdct thd bug.*/

function doubleCartItemQuantities(cart){
    // Loop through each item in the cart
    for(let i=0; i<cart.length; i++){
        cart[i] *= 2;
    }
    return cart;
}

const cart = [1,2,3,4];
const Correctedcart = doubleCartItemQuantities(cart);
console.log("Corrected cart : ", Correctedcart)