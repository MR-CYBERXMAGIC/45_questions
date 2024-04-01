"use strict";
/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["mangos", "graphs", "apple"];
if (favorite_fruits.includes("mangos")) {
    console.log("You really like mangos!");
}
if (favorite_fruits.includes("graphs")) {
    console.log("You really like graphs!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apple!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
