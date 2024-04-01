/*

Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

function show_magicians(magicians: string[]) {
  // Prints the name of each magician in the array.
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]): string[] {
  // Modifies the array of magicians by adding "the Great" to each magician's name
  let great_magicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push(`${magicians[i]} the Great`);
  }
  return great_magicians;
}

// Array of magician's names
let magician_names: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];

let great_magicians: string[] = make_great([...magician_names]); //the spread operator ... is used to create a shallow copy of the magician_names array.

console.log("Original name:");
show_magicians(magician_names);
console.log("\nGreat name:");
show_magicians(great_magicians);
