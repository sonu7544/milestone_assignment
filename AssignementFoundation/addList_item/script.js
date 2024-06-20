/* 20. Dynamically Adding List Items to an Ordered List

Visit page and look for “What you'll learn” section. 
The section consists of a list of information on what you will be learning in the course. You are required to write 
a JavaScript program that stores a pre-existing array of list items. On each button click, the program should 
add a new list item in sequential order. The program should verify if any remaining items are available in the list 
item array and add the next item to the list accordingly. If no items are left, the function should display a 
message indicating that all items have been added.  */


let currentIndex = 0;
//function to list item
function addListItem() {
    const learnList = document.getElementById("learnList");
    if (currentIndex < learnItems.length) {
        const listItem = document.createElement("li");
        listItem.textContent = learnItems[currentIndex];
        learnList.appendChild(listItem);
        currentIndex++;
    }
    else{
        alert("All items have been added!");
    }
}

//Array of list item
const learnItems = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "React",
    "Node.js",
    "Express",
    "MongoDB"
];


