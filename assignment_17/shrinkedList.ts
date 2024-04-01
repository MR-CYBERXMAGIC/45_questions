/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
let invitation : string[] = ["Rana","Huzaifa","Ahsan","Ubaid"];
for (let i = 0; i < invitation.length; i++)
{
    console.log(`Hello ${invitation[i]}. This weekend came to my house. We will have dinner together.`);
};
console.log(`\n${invitation[0]} here. Sorry bro I am not available this weekend.`);
console.log(`No problem ${invitation[0]}.\n`);
console.log("Now I should modify the list and invite Usman in place of Rana.\n");
invitation[0] = "Usman";   //list modification
for (let i = 0; i < invitation.length; i++)
{
    console.log(`Hello ${invitation[i]}. This weekend came to my house. We will have dinner together.`);
};
console.log("\nGuys! I have found a bigger dinner table. Now I will be inviting few more guest.\n");
//Adding new guest at the beginning.
invitation.unshift("Sarim");//invitation.splice(Math.floor(0),0 ,"Sarim");(another method)
//Adding one new guest at the middle array.
invitation.splice(Math.floor(invitation.length/2),0 ,"Haris");
//Adding new guest at the end.
invitation.push("Ali"); //invitation.splice(Math.floor(invitation.length),0 ,"Ali");(another method)
for (let i = 0; i < invitation.length; i++)
{
    console.log(`Hello ${invitation[i]}. This weekend came to my house. We will have dinner together.`);
};
console.log("\nGuys I have a bad news.");
console.log("I had just found out that new dinner table won’t arrive in time for the dinner, and I have space for only two guests.\n");
// Remove guests until only two remain
while (invitation.length > 2) 
{
    let removedGuest = invitation.pop(); // Removes last guest from the list
    console.log(`${removedGuest} sorry for inconvenience. We will plan some thing later`);
};
console.log("\nNow I should tell the remaining two that they are still invited\n");
for (let i = invitation.length-1; i >=0; i--)
{
    console.log(`Hello ${invitation[i]}. You are Still invited`); // telling the left 2 that they are still invited.
    invitation.pop(); // Remove the last two left
};
console.log(invitation);// showing an empty list




