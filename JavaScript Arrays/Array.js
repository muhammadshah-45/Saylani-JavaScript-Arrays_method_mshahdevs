
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


// #############Array Search Methods #############

//Array index Methods
const vegetables = ["tomato","potato","onion","chilli","potato"];
console.log(vegetables.indexOf("potato"));

//Array lastIndex method

console.log(vegetables.lastIndexOf("potato"));

//Array include method

console.log(vegetables.includes("potato"));

//Array find method

console.log(vegetables.find((x) => x === "potato"));

//Array findIndex method

console.log(vegetables.findIndex((x) => x === "potato"));

//Array findLast method
console.log(vegetables.findLast((x) => x === "potato"));

//Array findlastIndex method
console.log(vegetables.findLastIndex((x) => x === "potato"));


// ############ ARRAY SORTING #########

//Array sort method

console.log(vegetables.sort());
console.log(vegetables.toSorted());
let arrNum = [1,2,45,65,44,200];

console.log(arrNum.sort((a,b) => a-b));

//Array toSorted method

console.log(arrNum.toSorted());

//Array reverse method
console.log(vegetables.reverse());

console.log(arrNum.reverse());


//############# ARRAY ITERATION  OR HELPERS#########

console.log(arrNum.forEach((x)=> x));
