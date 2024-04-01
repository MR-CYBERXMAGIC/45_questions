/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians().
Which prints the name of each magician in the array.
*/
function show_magicians(magicians) {
    // Prints the name of each magician in the array.
    magicians.forEach(function (magician) {
        console.log(magician);
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
