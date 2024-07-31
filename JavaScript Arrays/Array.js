
const fruits = ["banana","apple","orange","red apple"];
console.log(fruits);
var f = fruits.splice(0,1);
console.log(f);
//Array length 


console.log(fruits.length);

//Array toString method

console.log(fruits.toString());

//Array at method

console.log(fruits.at(0));

//Array join method

console.log(fruits.join(",,"));

//Array pop method

console.log(fruits.pop());

//Array push method
console.log(fruits.push("strawberry"));

//Array shift method

console.log(fruits.shift());

//Array unshift method
console.log(fruits.unshift("pineapple"));

//Array delete method

delete fruits[2];
console.log(fruits);

//Array concat method

const newFruits = ["mango","watermelon"];
console.log(fruits.concat(newFruits));

//Array copyWithin method

fruits.copyWithin(1, 0, 2);
console.log(fruits);

var flattened = ["mango","watermelon",["apple","pear"],["peach"]];

console.log(flattened.flat());

console.log(fruits.slice(0,2));