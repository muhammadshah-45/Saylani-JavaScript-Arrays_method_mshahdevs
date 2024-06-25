//======== unshift Method ========== //

//The unshift() adds element to beginning and returns a new array length.

//Syntax 

// array.unshift(item1, item2, .... itemX); // Syntax

let bikes = ["yamaha","Zxmco","United"];

console.log(bikes.unshift("Honda","Civic")); // Honda , civic will be added at the beginning of an array.

console.log(bikes); // changes the original array length.

// Output 

// ["Honda","Civic","yamaha","Zxmco","United"]