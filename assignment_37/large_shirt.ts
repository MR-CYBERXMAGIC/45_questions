/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
*/

function make_shirt(size: string = "Large", message: string = "I love TypeScript"){
    console.log("The shirt size is", size);
    console.log("Message on shirt is", message,"\n");
}

// Making large shirt with default message
make_shirt();

// Making medium shirt with default message
make_shirt("Medium");

// Making custom shirt
make_shirt("Small", "Keep coding!");
