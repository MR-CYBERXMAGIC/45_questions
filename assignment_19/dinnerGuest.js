/*Dinner Guests: Working with one of the programs from Exercises 14 through 18.
Print a message indicating the number of people you are inviting to dinner.
*/
var invitation = ["Rana", "Huzaifa", "Ahsan", "Ubaid"];
for (var i = 0; i < invitation.length; i++) {
    console.log("Hello ".concat(invitation[i], ". This weekend came to my house. We will have dinner together."));
}
console.log("Total number of guest invited:", invitation.length);
