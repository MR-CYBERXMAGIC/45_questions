/*
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly
*/

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function storeCarInfo(
  manufacturer: string,
  model: string,
  ...extras: { [key: string]: any }[]
): Car {
  let carInfo: Car = { manufacturer, model };
  extras.forEach((extra) => {
    for (const key in extra) {
      carInfo[key] = extra[key];
    }
  });
  return carInfo;
}

// Call the function with required information and additional properties
let car1: Car = storeCarInfo(
  "Toyota",
  "Camry",
  { color: "red" },
  { year: 2022 }
);
console.log(car1);
