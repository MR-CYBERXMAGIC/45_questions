/*
Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
let cars : string[] = ["Volkswagen Group","Toyota Motor Corp","Stellantis","Mercedes Benz AG","Ford Motor Co"]
console.log("\nThere are a lot of car maunfacturer in the world.");
console.log("Here are the top 5 biggest car companies in the world based on revenue in 2022:\n");
for (let i = cars.length; i > 0; i--)
{
    console.log(`${cars[i-1]} is at number ${i}`);
}