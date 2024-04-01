/*
Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified
*/
function show_magicians(magicians) {
    // Prints the name of each magician in the array.
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    // Prints the name of each magician in the array.
    magicians.forEach(function (magician) {
        console.log("".concat(magician, " the great"));
    });
}
// Array of magician's names
var magician_names = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
// Calling the function to show magicians
show_magicians(magician_names);
console.log("");
make_great(magician_names);
