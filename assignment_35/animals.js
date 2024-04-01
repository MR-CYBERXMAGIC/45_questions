/*
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet
*/
var animals = ["Dog", "Cat", "Rabbit"];
// Printing just the name of each animal
console.log("Animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Printing a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("\nDogs are known for their loyalty, intelligence, and friendly nature. \nThey make excellent companions and are often used as service animals.\n      ");
            break;
        case "Cat":
            console.log("\nCats are independent and curious creatures.\nThey are known for their agility, grooming habits, and their ability to form strong bonds with their owners.\"\n      ");
            break;
        case "Rabbit":
            console.log("\nRabbits are social animals that thrive on companionship. \nThey are known for their gentle nature, agility, and their ability to be litter-trained.\"\n      ");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}
// Statement about what these animals have in common
console.log("\nThese animals are all popular choices as pets due to their unique personalities and the companionship they offer.");
