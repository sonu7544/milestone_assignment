/*12. Calculate rental cost

A car rental company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd 
of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost. 
Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.


The rental costs are
 Economy = Rs. 4000 /- pdr days
  Midsizd = Rs. 10,000 /- pdr days
 Luxury = Rs. 20,000 /- pdr days. */

function calculateRantelCost(daysRented,carType){
    let rentalCostPerDay;

    // Determine rental cost per day based on car type
    switch(carType.toLowerCase()){
        case 'economy':
            rentalCostPerDay = 4000;
            break;

        case 'midsize':
            rentalCostPerDay = 10000;
            break;

        case 'luxury':
            rentalCostPerDay = 20000;
            break;

            default:
                console.log("Invalid car type");
                return;
    }
     // Calculate total rental cost
     const totalRentalCost = rentalCostPerDay * daysRented;
     return totalRentalCost;
}

const daysRented = prompt("Enter the days : ");
const carType = prompt("Enter the car of type : ");
const totalCost = calculateRantelCost(daysRented,carType);
console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalCost}/-`);  


