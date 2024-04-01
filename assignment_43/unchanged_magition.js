/*

Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    // Prints the name of each magician in the array.
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    // Modifies the array of magicians by adding "the Great" to each magician's name
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("".concat(magicians[i], " the Great"));
    }
    return great_magicians;
}
// Array of magician's names
var magician_names = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
var great_magicians = make_great(__spreadArray([], magician_names, true));
console.log("Original name:");
show_magicians(magician_names);
console.log("\nGreat name:");
show_magicians(great_magicians);
