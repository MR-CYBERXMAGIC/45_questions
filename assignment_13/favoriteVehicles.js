/*
Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
var cars = ["Volkswagen Group", "Toyota Motor Corp", "Stellantis", "Mercedes Benz AG", "Ford Motor Co"];
console.log("There are a lot of car maunfacturer in the world.");
console.log("Here are the top 5 biggest car companies in the world based on revenue in 2022:\n");
for (var i = cars.length; i > 0; i--) {
    console.log("".concat(cars[i - 1], " is at number ").concat(i));
}
