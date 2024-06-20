/* 11. Unit converter

A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying 
it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd 
function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station 
to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd. */

function celsiusToFahrenheit(celsiusTemperature){
    // Convert Celsius to Fahrenheit using the formula
    const fahrenheit = (celsiusTemperature * 9/5) + 32;
    return fahrenheit;
}

const celsiusTemperature = prompt("Enter the celsius : ");
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F.`);