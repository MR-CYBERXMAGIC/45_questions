/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var weather = "sunny";
// Test if weather is equal to 'sunny'
console.log("Is weather === 'sunny'? I predict True.");
console.log(weather === "sunny");
// Test if weather is not equal to 'rainy'
console.log("Is weather !== 'rainy'? I predict True.");
console.log(weather !== "rainy");
// Test if weather is equal to 'cloudy' (case-sensitive comparison)
console.log("Is weather === 'cloudy'? I predict False.");
console.log(weather === "cloudy");
// Test if weather is not equal to 'sunny' (case-sensitive comparison)
console.log("Is weather !== 'sunny'? I predict False.");
console.log(weather !== "sunny");
// Test if weather is strictly equal to 'sunny' (checking value and type)
console.log("Is weather === 'sunny'? I predict True.");
console.log(weather === "sunny");
// Test if weather is not strictly equal to 'sunny' (checking value and type)
console.log("Is weather !== 'sunny'? I predict False.");
console.log(weather !== "sunny");
// Test if weather is 'sunny' or 'cloudy'
console.log("Is weather === 'sunny' || weather === 'cloudy'? I predict True.");
console.log(weather === "sunny" || weather === "cloudy");
// Test if weather is not 'sunny' and not 'rainy'
console.log("Is weather !== 'sunny' && weather !== 'rainy'? I predict False.");
console.log(weather !== "sunny" && weather !== "rainy");
// Test if the length of the weather variable is equal to 5
console.log("Is weather.length === 5? I predict True.");
console.log(weather.length === 5);
// Test if the length of the weather variable is less than 6
console.log("Is weather.length > 6? I predict False.");
console.log(weather.length > 6);
