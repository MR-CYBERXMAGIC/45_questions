/*
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet
*/

const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing just the name of each animal
console.log("Animals:");
for (const animal of animals) {
  console.log(animal);
}

// Printing a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
  switch (animal) {
    case "Dog":
      console.log(`
Dogs are known for their loyalty, intelligence, and friendly nature. 
They make excellent companions and are often used as service animals.
      `);
      break;
    case "Cat":
      console.log(`
Cats are independent and curious creatures.
They are known for their agility, grooming habits, and their ability to form strong bonds with their owners."
      `);
      break;
    case "Rabbit":
      console.log(`
Rabbits are social animals that thrive on companionship. 
They are known for their gentle nature, agility, and their ability to be litter-trained."
      `);
      break;
    default:
      console.log("This animal is not recognized.");
  }
}

// Statement about what these animals have in common
console.log(
  "\nThese animals are all popular choices as pets due to their unique personalities and the companionship they offer."
);
