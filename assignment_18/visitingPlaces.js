/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
// Define the array of locations
var locations = ["Great Barrier Reef", "Macchu Picchu", "Iceland", "Taj Mahal", "Northern Lights"];
// Print the array in its original order
console.log("Original order:\n", locations);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:\n", locations.slice().sort());
// Show that the array is still in its original order
console.log("Original order (still):\n", locations);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Alphabetical order:\n", locations.slice().sort().reverse());
// Show that the array is still in its original order
console.log("Original order (still):\n", locations);
// Reverse the order of the list
locations.reverse();
console.log("Reversed order:\n", locations);
// Reverse the order of the list again to show it's back to its original order
locations.reverse();
console.log("Original order (again):\n", locations);
// Sort the array so it's stored in alphabetical order
locations.sort();
console.log("Sorted in alphabetical order:\n", locations);
// Sort to change the array so it's stored in reverse alphabetical order
locations.reverse();
console.log("Sorted in reverse alphabetical order:\n", locations);
