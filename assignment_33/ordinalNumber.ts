/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 to 9 in an array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line
*/

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length ; i++){

    let num=i+1;
    let ordinalEnding:string;

    if (num === 1) {
        ordinalEnding = "st";
    } else if (num === 2) {
        ordinalEnding = "nd";
    } else if (num === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${num}${ordinalEnding}`);
}