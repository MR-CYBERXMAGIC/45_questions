/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time
*/


function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items added to the sandwich.");
    } else {
        console.log("Items on the sandwich:");
        items.forEach(item => console.log(`- ${item}`));
    }
    console.log(); // Add a newline for better readability
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana", "Nutella");
makeSandwich()
