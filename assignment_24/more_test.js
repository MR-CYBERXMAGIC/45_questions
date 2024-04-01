"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
let carBrand = 'Ferrari';
// Test if carBrand is equal to 'Ferrari'
console.log("Is carBrand === 'Ferrari'? I predict True.");
console.log(carBrand === 'Ferrari');
// Test if carBrand is equal to 'Lamborghini'
console.log("Is carBrand === 'Lamborghini'? I predict False.");
console.log(carBrand === 'Lamborghini');
// Tests using the lower case function
let modelName = 'Mustang';
// Test if modelName in lowercase is equal to 'mustang'
console.log("Is modelName.toLowerCase() === 'mustang'? I predict True.");
console.log(modelName.toLowerCase() === 'mustang');
// Test if modelName in lowercase is not equal to 'mustang'
console.log("Is modelName.toLowerCase() !== 'mustang'? I predict False.");
console.log(modelName.toLowerCase() !== 'mustang');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let topSpeed = 200;
// Test if topSpeed is equal to 200
console.log("Is topSpeed === 200? I predict True.");
console.log(topSpeed === 200);
// Test if topSpeed is not equal to 200
console.log("Is topSpeed !== 200? I predict False.");
console.log(topSpeed !== 200);
// Test if topSpeed is greater than 150
console.log("Is topSpeed > 150? I predict True.");
console.log(topSpeed > 150);
// Test if topSpeed is less than 200
console.log("Is topSpeed < 150? I predict False.");
console.log(topSpeed < 150);
// Test if topSpeed is less than or equal to 250
console.log("Is topSpeed <= 250? I predict True.");
console.log(topSpeed <= 250);
// Test if topSpeed is greater than or equal to 250
console.log("Is topSpeed >= 250? I predict False.");
console.log(topSpeed >= 250);
// Tests using "and" and "or" operators
let isConvertible = true;
let isTurbocharged = false;
// Test if it's either a convertible or turbocharged
console.log("Is it either a convertible OR turbocharged? I predict True.");
console.log(isConvertible || isTurbocharged);
// Test if it's both a convertible and turbocharged
console.log("Is it both a convertible AND turbocharged? I predict False.");
console.log(isConvertible && isTurbocharged);
// Test whether a brand is in an array
let brands = ['Ferrari', 'Porsche', 'Lamborghini'];
// Test if 'Porsche' is in the brands array
console.log("Is 'Porsche' in the brands array? I predict True.");
console.log(brands.includes('Porsche'));
// Test whether a brand is not in an array
// Test if 'Aston Martin' is not in the brands array
console.log("Is 'Lamborghini' not in the brands array? I predict False.");
console.log(!brands.includes('Lamborghini'));
