/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
var invitation = ["Rana", "Huzaifa", "Ahsan", "Ubaid"];
for (var i = 0; i < invitation.length; i++) {
    console.log("Hello ".concat(invitation[i], ". This weekend came to my house. We will have dinner together."));
}
console.log("\n".concat(invitation[0], " here. Sorry bro I am not available this weekend."));
console.log("No problem ".concat(invitation[0], ".\n"));
console.log("Now I should modify the list and invite Usman in place of Rana.\n");
invitation[0] = "Usman"; //list modification
for (var i = 0; i < invitation.length; i++) {
    console.log("Hello ".concat(invitation[i], ". This weekend came to my house. We will have dinner together."));
}
