/*
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.
*/
var personName = "\t Muhammad Raza\n";
// Print the name with whitespaces
console.log("\nName with whitespaces:", personName);
// Strip the whitespaces from the name
var strippedName = personName.trim();
// Print the name after stripping whitespaces
console.log("Name after stripping whitespaces:", strippedName);
