/*
Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza
*/
var favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Printing just the name of each pizza
console.log("Favorite Pizzas:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Printing a sentence using the name of each pizza
console.log("\nStatements about my favorite pizzas:");
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional lines about the kinds of pizza you like
console.log("\nAdditional details about my favorite pizzas:");
console.log("- Pepperoni pizza is a classic favorite.");
console.log("- Margherita pizza is simple yet delicious with fresh tomatoes and basil.");
console.log("- BBQ Chicken pizza has a savory and tangy flavor that I enjoy.");
// Statement about how much I like pizza
console.log("\nMan I really love pizza!");
