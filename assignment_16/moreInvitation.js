/*
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
 Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
var invitation = ["Rana", "Huzaifa", "Ahsan", "Ubaid"];
for (var i = 0; i < invitation.length; i++) {
    console.log("Hello ".concat(invitation[i], ". This weekend came to my house. We will have dinner together."));
}
;
console.log("\n".concat(invitation[0], " here. Sorry bro I am not available this weekend."));
console.log("No problem ".concat(invitation[0], ".\n"));
console.log("Now I should modify the list and invite Usman in place of Rana.\n");
invitation[0] = "Usman"; //list modification
for (var i = 0; i < invitation.length; i++) {
    console.log("Hello ".concat(invitation[i], ". This weekend came to my house. We will have dinner together."));
}
;
console.log("\nGuys! I have found a bigger dinner table. Now I will be inviting few more guest.\n");
//Adding new guest at the beginning.
//invitation.unshift("Sarim");//
invitation.splice(Math.floor(0), 0, "Sarim"); // (another method)
//Adding one new guest at the middle array.
invitation.splice(Math.floor(invitation.length / 2), 0, "Haris");
//Adding new guest at the end.
//invitation.push("Ali"); 
invitation.splice(Math.floor(invitation.length), 0, "Ali");
for (var i = 0; i < invitation.length; i++) {
    console.log("Hello ".concat(invitation[i], ". This weekend came to my house. We will have dinner together."));
}
;
