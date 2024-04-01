/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
var invitation = ["Rana", "Huzaifa", "Ahsan", "Ubaid"];
for (var i = 0; i < invitation.length; i++) {
    console.log("Hello ".concat(invitation[i], ". This weekend came to my house. We will have dinner together."));
}
