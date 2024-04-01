/*
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly
*/
function storeCarInfo(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = { manufacturer: manufacturer, model: model };
    extras.forEach(function (extra) {
        for (var key in extra) {
            carInfo[key] = extra[key];
        }
    });
    return carInfo;
}
// Call the function with required information and additional properties
var car1 = storeCarInfo("Toyota", "Camry", { color: "red" }, { year: 2022 });
console.log(car1);
