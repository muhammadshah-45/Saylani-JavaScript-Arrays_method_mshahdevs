// // var firstName = prompt("Please enter a first name");

// // var capitalizedFirstName =firstName.toUpperCase();
// // var lastName = prompt("Please enter a last name");
// // var smallestLastName = lastName.toLowerCase();

// // var fullName = capitalizedFirstName + " " + smallestLastName;
// // console.log(firstName + " " + lastName + " " + fullName);
// // console.log(capitalizedFirstName);
// // console.log(smallestLastName);
// // console.log(fullName);

// // var bankAccount =["hbl","abl","mbl","mcb"];

// // if(bankAccount === "hbl"){
// //  alert("Yes,I have a bank account")
// // }else if(bankAccount === "abl"){
// //     alert("Yes,I  have a bank account")
// // }else if(bankAccount === "mbl"){
// //     alert("Yes, I  have a bank account")
// // }else if(bankAccount === "mcb"){
// //     alert("Yes, I  have a bank account")
// // }else{
// //     alert("No, I don't have a bank account")
// // }
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) { return b - a });
// console.log(points);

// const fors = points.forEach(function (point) {
//   return point;
// })

// const alpha = ["g", "f", "e", "y", "t"];

// const A = alpha.sort(function (b, a) {
//   return b - a;
// })

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.filter((x) => x > 5);
// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);


// const red = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function alltred(value, acc, index) {
//   const returns = value + acc;
//   console.log(`value: ${value}, index: ${index} accumulator: ${acc}`);
//   return returns;
// }
// red.reduceRight(alltred);

// const were = red.every((value) => value === 8);

// console.log(were);

// var ages = [20, 44, 96, 33, 20, 33];

// var total = ages.every((age) => age >= 18)
// console.log(total);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {

//   console.log(x);
// }
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

// const numbers_1 = [1, 2, 3, 4, 50, 101, 102];
// function modifyArray(numbers) {
//   const modifiedNumbers = numbers.map(number => {
//     if (number % 2 === 0) {
//       return number * 2;
//     } else {
//       return number + 1;
//     }
//   }).filter(number => number <= 100);
//   return modifiedNumbers;
// }

// const modifiedNumbers = modifyArray(numbers_1);

// console.log(modifiedNumbers);

// // var hello = "muhammad shah @## 21223";
// var hello = "hElLo wOrld! 123";

// var removeVowels = hello.replace(/[aeiou]/g, " ");

// var removeNumbers = removeVowels.replace(/[^a-z]/g, "");
// console.log(hello);
// console.log(removeVowels);
// console.log(removeNumbers);

// var newStr = "";

// for (var i = 0; i < hello.length; i++) {
//   if (i % 2 === 0) {
//     newStr += hello[i].toUpperCase()
//   } else {
//     newStr += hello[i].toLowerCase();
//   }

// }
// console.log(newStr);


// function Student(first, last, age, marks) {
//   this.first = first;
//   this.last = last;
//   this.age = age;
//   this.marks = marks;
// }

// const student = new Student("Muhammad", "Shah", 20, 450);
// console.log(student);

// const searchObject = (arr, property, value) => {
//   return arr.find(obj => obj[property] === value);
// };


// const arr = [
//   { id: 1, name: 'John', age: 30 },
//   { id: 2, name: 'Jane', age: 25 },
//   { id: 3, name: 'Bob', age: 40 },
//   { id: 4, name: 'Shah', age: 19 }
// ];

// const arrSearch = arr.find((obj) => {
//   return obj
// }

// )
// const search = searchObject(arr, 'id', 3);
// console.log(search); // Output: { id: 2, name: 'Jane', age: 25 }

// const fruits_2 = [
//   { name: "Mango", price: 200 }
//   , { name: "Banana", price: 300 },
//   { name: "Orange", price: 150 }
// ];

// const searchFruits = (arr, property, value) => {
//   return arr.find(obj => obj[property] === value);
// }

// const search_fruit = searchFruits(fruits_2, 'price', 150);

// console.log(search_fruit); // Output: { name: 'Mango', price: 200 }

// const arr2 = [1, 2, 5, 3, 5, 4, 5, 10, 6, 5];

// // const uniqueArr =arr2.indexOf(5); //Output: indext at 2
// // const uniqueArr =arr2.lastIndexOf(5); //Output: indext at 9
// // const uniqueArr =arr2.includes(5); //Output: true
// // const uniqueArr =arr2.findIndex(valueFindindex)
// // function valueFindindex(value){
// //   return value === 5;
// // }; //Output: index at 2
// // const uniqueArr2 =arr2.findLast(x => x === 5); //Output: 5
// // const uniqueArr = arr2.findLastIndex(x => x ); //Output: 9

// // console.log(uniqueArr2);

// //pass a function with find()
// //pass a function with findLast()
// //pass a function with findIndex()
// //pass a function with findIndexLast()



// const arr3 = [
//   { name: "Product A", price: 50 },
//   { name: "Product B", price: 200 },
//   { name: "Product C", price: 30 },
//   { name: "Product A", price: 40 },
//   { name: "Product B", price: 100 },
//   { name: "Product C", price: 20 }
// ];

// // // const uniqueArrays = arr1.findIndex(x => x.price > 100 );
// // const uniqueArrays = arr1.findLast(x => x.price < 50 );
// // // const uniqueArrays = arr1.findLastIndex(x => x.price < 50 );
// // const uniqueArrays = arr3.includes({name: 'Pa





// const a1 = [
//   { name: "Product A", price: 50 },
//   { name: "Product B", price: 200 },
//   { name: "Product C", price: 30 },
//   { name: "Product A", price: 40 },
//   { name: "Product B", price: 100 },
//   { name: "Product C", price: 20 }
// ];
// const findinclude = a1.includes({name: "Product C"});
// console.log(findinclude);
// // Index of first object with price > 100
// const firstIndex = a1.findIndex(obj => obj.price > 100);

// // Last object with price < 50
// const lastObject = a1.findLast(obj => obj.price < 50);

// // Index of last object with price < 50
// const lastIndex = a1.findLastIndex(obj => obj.price < 50);

// // Includes object with name "Product C"
// const includesProductC = a1.some(obj => obj.name === "Product C");

// // Index of first object with name "Product A"
// const firstIndexOfProductA = a1.indexOf(obj => obj.name === "Product A");
// // Index of last object with name "Product A"
// const lastIndexOfProductA = a1.lastIndexOf(obj => obj.name === "Product A");

// // Output
// console.log("Index of first object with price > 100:", firstIndex);
// console.log("Last object with price < 50:", lastObject);
// console.log("Index of last object with price < 50:", lastIndex);
// console.log("Includes object with name 'Product C':", includesProductC);
// console.log("Index of first object with name 'Product A':", firstIndexOfProductA);
// console.log("Index of last object with name 'Product A':", lastIndexOfProductA);


// const arrays = [[1,2],[3,[[[1]]]]];

// const totals = arrays.flat(Infinity).reduce((a , v) => a + v);
// console.log(totals);

// const nums = [1,2,3];
// const strs = ["one", "two", "three"];
// const mapped = nums.flatMap((val,index)=>[val,strs[index]]);

// console.log(mapped);

// const arr4 = ["m","u","h","a","m","m","a","d"];

// const sliced = arr4.slice(0,9);
// console.log(sliced);

// const strss= arr4.reduce((a ,val)=> a + val);

// console.log(strss);



// let output = '';

// for(let i = 0; i < arr4.length; i++){
//   output += arr4[i];
// }
// console.log(output);

// const arr5 =["Fruits","Dry","Vegetables","Cereal","Gluten","Pears","Chocolate","Fruits","Vegetables"];

// const findFruit = arr5.find(x => x === "Fruits");
// console.log(`findFruitindex: ${findFruit}`);

// const findFruitindex =arr5.findIndex(x => x === "Fruits");
// console.log(`findFruit: ${findFruitindex}`);

// const findFruitLast =arr5.findLast(x => x === "Fruits");
// console.log(`findFruitLast: ${findFruitLast}`);

// const findFruitLastindex =arr5.findLastIndex(x => x === "Fruits");
// console.log(`findFruitLast : ${findFruitLastindex}`);

// const findFruitinclude =arr5.includes( "Dry");
// console.log(`findFruitinclude : ${findFruitinclude}`);

// const findFruitindexOf =arr5.indexOf( "Fruits");
// console.log(`findFruitindexOf : ${findFruitindexOf}`);

// const findFruitlastindexOf =arr5.findLastIndex(x => x === "Fruits");
// console.log(`findFruitLastindexOf : ${findFruitlastindexOf}`);


// const student1= {
//   firstName: "Muhammad",
//   lastName: "Shah",
//   age: 20,
//   marks: 450
// }

// const student2= {
//   firstName: "Ali",
//   lastName: "Khan",
  
// }

// const student3= Object.assign(student1,student2);
// const student4= Object.entries(student1);
// const student5= Object.keys(student1);
// const student6= Object.values(student1);

// console.log(student5);
// console.log(student4);

// console.log(student3);

// const fruits2 = {Bananas:300, Oranges:200, Apples:500};

// const myMap = new Map(Object.entries(fruits2));

// let text = "";
// for (let [fruit, value] of Object.entries(fruits2)) {
//   text += fruit + ": " + value  ;
// }
// console.log(text);
// console.log(myMap);

// const fruits3 = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits3);
// console.log(myObj);

// const fruits5 = [
// {name:"apples", quantity:300},
// {name:"bananas", quantity:500},
// {name:"oranges", quantity:200},
// {name:"kiwi", quantity:150}
// ];

// // Callback function to Group Elements
// function myCallback({ quantity }) {
// return quantity > 200 ? "ok" : "low";
// }

// // Group by Quantity
// const result = Object.groupBy(fruits5, myCallback);

// console.log(result);

// const person11 = {
//   fname:" John",
//   lname:" Doe",
//   age: 25
// };

// for (let x in person11) {
//   txt += person11[x];
// }

// console.log(txt);


// const student22 = ["Fruits","Vegetables","Mango","Fruits"];

// const pass = student22.findLast(x => x === "Fruits" );


// console.log(pass);
// console.log(typeof pass);
// const points = [40, 100, 1, 5, 25, 10];
// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = -Infinity;
//   console.log("line392",{len,min});
//   while (len--) {
    
//     console.log("line394",{len});
//     // 6 index len // 5 index len // 4 index len 

//     if (arr[len] > min) {
//       // 10 > Infinity
//       // 25 > Infinity
//       // 5 > Infinity
//       // 1 > Infinity
      

//       console.log("line396",{currentIndex:arr[len]});

//       min = arr[len];

//     }
//   }
//   return min;
// }

// console.log(myArrayMin(points));

//Task 1:- give a string sentence = "The quick brown fox jumped over the lazy dog." and a string word = "fox", determine if the word is found in the sentence. Store the result in a isWordFound.

var sentence = "The quick brown fox jumped over the lazy dog.";
var isWordFound = sentence.indexOf("fox");
console.log(isWordFound);

//Task 2:- Give a string text = "Hello, world, Welcome to the world of programming." and a string segment = "world", count the number of times the segment appears in the text. Store the result in a variable segmentCount.

var text = "Hello, world, Welcome to the world of programming.";
var segment = "world";
var segmentCount = (text.match(new RegExp(segment, "gi")) || []).length;
console.log(segmentCount);

//Task 3:- Give a  string text = "Javascript" and a number index = 4.find the chararcter at the index.If the index is out of bounds,store 'Index out of bounds' in a variable charAtIndex.

var text = "Javascript";
var charAtIndex = text.charAt(4);
console.log(charAtIndex);

//Task 4:- Give a string text = "banana" and a character char ="a",find all indices where the character is found in the  text.Store the result in an array charIndices.

var text = "banana";
var char = "a";
var charIndices = [];
for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === char) {
    charIndices.push(i);
  }
}

console.log(charIndices);

//Task 5:- Give a string text = Mississippi" and characters oldChar = 's' and newChar = 'z', create a new string where all instances of oldChar are replaced with newChar.Store the result in a variable newText.

var text = "Mississippi";
var oldChar = 's';
var newChar = 'z';
var newText = text.replace(new RegExp(oldChar, 'g'), newChar);
console.log(newText);


var word = "fox";
var iswordfound = sentence.indexOf(word)

task 

var text = "Hello,world welcome to the world programming";

var segment = "world";

text = text.split("");

for(var i = 0; i < text.length; i++){
  if(text[i] === segment[0]){
    var isSegmentFound = true;
    for(var j = 0; j < segment.length; j++){
      if(text[i + j]!== segment[j]){
        isSegmentFound = false;
        break;
      }
    }
    if(isSegmentFound){
      console.log(i);
    }
  }
}

var text = "Mississippi";

String.replace(/s/g,'z');