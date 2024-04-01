/*Name Cases: Store a person’s name in a variable, and then print that person’s name in
1)toLowerCase
2)toUpperCase
3)toTitleCase */
var personName = "muhamad raza mustafa";
console.log("\nYour name in different cases:\n");
console.log("lowercase: ", personName.toLowerCase());
console.log("Uppercase: ", personName.toUpperCase());
// Unfortunatly there is no in built toTitlecase function sa we have to create a user define function 
function toTitleCase(word) {
    var titleCase = "";
    var words = word.split(' '); // split(' ') in an in build function that splits the string at each space, creating an array of separate words.
    // we can use in build fuction like map to go through loop but we are learners so it is better ot use loop.
    for (var i = 0; i < words.length; i++) {
        titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
        /*
        words[i].charAt(0).toUpperCase() covert first letter of word present at index i to uppercase.
        words[i].slice(1).toLowerCase() breaks the word after first character and corvert it to lowercase.
        then it will concatenate all and save in titleCase
        then loop increases its value till end and final value of titleCase is returned by the function
        */
    }
    return titleCase;
}
var titleCaseName = toTitleCase(personName);
console.log("Titlecase:  ".concat(titleCaseName));
