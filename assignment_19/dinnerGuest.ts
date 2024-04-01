/*Dinner Guests: Working with one of the programs from Exercises 14 through 18.
Print a message indicating the number of people you are inviting to dinner.
*/
let invitation : string[] = ["Rana","Huzaifa","Ahsan","Ubaid"];
for (let i = 0; i < invitation.length; i++)
{
    console.log(`Hello ${invitation[i]}. This weekend came to my house. We will have dinner together.`);
}
console.log("Total number of guest invited:",invitation.length);


