/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.
*/
var list = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C#",
    "Ruby",
    "Swift",
    "Kotlin",
    "Go",
    "TypeScript",
];
console.log("Name of 10 most used programing languages are");
for (var i_1 = 0; i_1 <= list.length; i_1++) {
    //the loop iterate 1 time greater then the index so it print undefined which is typically an error.
    console.log(list[i_1]);
}
//Correction of Error
console.log("Name of 10 most used programing languages are");
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
