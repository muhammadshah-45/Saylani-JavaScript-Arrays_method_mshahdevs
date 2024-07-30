// const str = "Shah";

// for(var i of str){
//     console.log(`${i}`);
// }
// for(var i in str){
//     console.log(`object ${i}`);
// }

// const arr = ['a', 'b', 'c', 'd', 'e'];
// for(var i of arr){
//  console.log(`${i}`);
// }
// for(var i in arr){
//     console.log(`object ${i}`);
// }
// const arr2 = [1,2,3,4,5,6,7,8,9,10,11];

// for(var i of arr2){
//     console.log(`${i}`);
// }

// const letters =new Set([1,2,2,4,3,4]);

// console.log(letters);
// // const myIterator = letters.values();
// let text = "";
// for(var i of letters.keys()){
//     text += i ;
//     console.log(`line ${text}`);
// }

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   for (const x of fruits) {
//     console.log(`${x}`);
//   }

//   const numbers = new Set();

//   numbers.add(1);
//   numbers.add(2);
//   numbers.add(3);
//   numbers.add(4);
// let answer = numbers.has(1) ;
//   console.log(numbers);

// Create a Set
const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.entries();

// List all Elements
// let text = "";
// for (const x of myIterator) {
//   text += x;
//   console.log(text);
// }

const vegetables = new Map([
    ['tomato',230],
    ["potato",4555],
    ["onion",433]
])

console.log(vegetables);

const fruits = new Map();

fruits.set("apple",333);
fruits.set("orange",322);
fruits.set("strawberry",555);
fruits.get("apple")
console.log(fruits);
// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value;
//   console.log(text);
// })
let text = "";
for (const x of fruits.entries()) {
  text += x;
  console.log(text);
}

let car = "";



const time = new Date();

const restaurant = ["smaq"];