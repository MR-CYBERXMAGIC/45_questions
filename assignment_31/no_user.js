/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
console.log("First day \n");
var usernames = ["admin", "cyber", "iconic", "senior", "beast"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
console.log("\nSecond day ");
usernames = [];
if (usernames.length === 0) {
    console.log("\nWe need to find some users!");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
