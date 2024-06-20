/* 3. Color Mixer

Write a JavaScript program that takes in two strings representing colors and uses a switch statement to 
determine the resulting color when the two colors are mixed. The program should print the resulting color 
#ased on the following criteria"
L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
L If any other com#ination of colors is input, the program should print "Invalid color com#ination"Q   */

function mixColors(color1,color2){
    switch(color1.toLowerCase()){
        case 'red':
            switch(color2.toLowerCase()){
                case 'blue':
                    console.log("purple");
                    break;

                    case 'yellow':
                        console.log("orange");
                        break;

                        default:
                            console.log("Invalid color combination");
                            break;
            }
            break;
            case 'blue':
                switch(color2.toLowerCase()){
                    case 'red':
                        console.log("purple");
                        break;

                        case 'yellow':
                            console.log("green");
                            break;

                            default:
                                console.log("Invalid color combination");
                                break;
                }
                break;
                case 'yellow':
                    switch(color2.toLowerCase()){
                        case 'red':
                            console.log("orange");
                            break;

                            case 'blue':
                                console.log("green");
                                break;

                            default:
                                console.log("Invalid color combination");
                                break;
                    }
                    break;
                    default:
                        console.log("Invalid color combination");
                        break;

    }
}

// Example usage:
mixColors("red", "blue"); // Output: purple
mixColors("blue", "red"); // Output: purple
mixColors("red", "yellow"); // Output: orange
mixColors("yellow", "red"); // Output: orange
mixColors("blue", "yellow"); // Output: green
mixColors("yellow", "blue"); // Output: green
mixColors("green", "purple"); // Output: Invalid color combination