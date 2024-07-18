// //Exercise 1
// // Task: Declare a variable str and assign it the value "Welcome to JavaScript!". Print the length of the string.

// var str = "Welcome to JavaScript";
// console.log(str);
// var strLength = str.length;
// console.log(strLength);

// // Exercise 2
// //Task: Declare a variable str and assign it the value "Programming is awesome". Extract and print the word "awesome" from the string.

// var str_1 = "Programming is awesome";
// console.log(str_1);
// var str_print =str_1.slice(0,11);
// console.log(str_print);

// //Exercise 3
// //Task: Declare a variable str and assign it the value "Hello, Universe!". Extract and print the first five characters of the string.

// var str_2 = "Hello, Universe!";
// console.log(str_2);
// var str_print_2 = str_2.slice(0,5);
// console.log(str_print_2);

// // if(str_2 === "Hello, Universe!"){
// //     alert("yes");
// // }


// //Exercise 4
// //Task: Declare a variable str and assign it the value "Full Stack Developer". Extract and print the substring "Stack".

// var str_3 = "Full Stack Developer";
// console.log(str_3);
// var str_print_3 = str_3.slice(5,11);
// console.log(str_print_3);

// //Exercise 5
// // Task: Declare a variable str and assign it the value "Javascript Strings" Extract and print the last four characters of the string.

// var str_4 = "Javascript Strings";
// var str_print_4 = str_4.slice(14);
// console.log(str_print_4);

// // var fruits = ["Banana","Apple","Orange","Strawberry","Mango","Pineapple"];
// // var fruits =[];

// // for(var i = 0; i < 5; i++){

// //      fruits[i] = prompt("please enter fruit name");
// //    console.log(fruits[i].toUpperCase());
// // }

// // const arr = [1, 2, 3, 4, 5];
// // arr.copyWithin(2, 0, 2);
// // console.log(arr); // Output: [1, 2, 1, 2, 5]
// // arr.copyWithin(2,2,2);
// // console.log(arr); // Output: [
// // In this example:

// // - target is 2, so the copying starts at index 2.
// // - start is 0, so the copying begins at index 0.
// // - end is 2, so the copying ends at index 2 (exclusive).

// // The elements at indices 0 and 1 (1 and 2) are copied to indices 2 and 3, respectively.

// // copyWithin() is useful when you need to:

// // - Move elements within an array
// // - Duplicate elements within an array
// // - Fill a portion of an array with a specific value


// // const fullName=[12,20,34,65,81,18,89,20];

// // // const allNames = fullName.includes("Ali");
// // function myfunction(value,index,array) {
// //     return `value:${value} index:${index} array:${array}`;
// // }
// // console.log(myfunction());

// // const allNames = fullName.find(myfunction);
// // console.log(allNames);


var eligibleUniversities =["iqra","cecos","ims","imscience","islamia"];
var check = prompt("Please your university name");



for(var eligibleStudents = 0; eligibleStudents < eligibleUniversities.length; eligibleStudents++){
    if(eligibleUniversities[eligibleStudents] === check){
        alert("yes");
    }
}

// // var str = "HellO WoRld";
// // var str = "hElLo wOrLd";
// //          //012345678910
// //          //HeLlO WoRlD  ->Output

// // var newStr = "";

// // for(var i = 0; i <str.length; i++){
// //     console.log(str[i]);
// //     if(i % 2 === 0){
// //         newStr += str[i].toUpperCase();
// //     }else{
// //         newStr += str[i].toLowerCase();
// //     }
// // }
// // console.log(newStr);

// var str ="HeLlO WoRlD! 123";
// var str2 = str.toLowerCase();//Convert to lower case

// var str3 = str2.replace(/[aeiou]/g, ""); //remove vowels
// var str4 = str2.replace(/[^a-z]/g, ""); //remove non-alpha characters
// console.log(str4);
// console.log(str3);

// var arr =["hello", "World", "hello", "JavaScript", "world"];

// function convertSortUnique(arr) {
//     // 1. Convert all strings to uppercase using map()
//     const upperCaseArr = arr.map(str => str.toUpperCase());
  
//     // 2. Remove duplicates and sort in descending order using Set() and spread operator (...)
//     return [...new Set(upperCaseArr)].sort().reverse();
//   }
  
// var fullName = "MuhammadShah #$#$ 123";
// //Task 1:Convert a string to LowerCase
// //Task 2:Remove all non-alphanumeric characters




// // let text = "Visit W3Schools!";
// // let n = text.search("W3S");

// // console.log(n);

// // const st1 =["Mango","Orange","Banana","Pineapple"];
// // console.log(st1);
// // const st2 = st1.sort();
// // const st3 = st1.reverse();
// //   console.log(st2);
// //   console.log(st3);


// //   var students= [];

// //   for (let i = 0; i <=4; i++){
// //     students[i] =prompt('Student names');
// //     alert(`Student ${students[i].toUpperCase()}`);
// //     console.log(students[i].toUpperCase());
// //   }






// var task = [];

// var sum = 0;

// for(var i = 0; i <= 4; i++) {
//    task[i] = +prompt("Please enter a number");

// }
// for(var i = 0; i < task.length; i++) {
//   sum += task[i];
// }
// console.log(sum);

// var name = prompt("Enter a name");
// var reverseName = "";

// for(var i = name.length - 1; i >= 0; i--) {
//   reverseName += name[i];
// }
// console.log(reverseName.toUpperCase());
// function countVowels(text) {
//   let vowelCount = 0;
//   const lowercaseText = text.toLowerCase();

//   for (let char of lowercaseText) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//       vowelCount++;
//     }const secretNumber = Math.floor(Math.random() * 100) + 1;
//     let guesses = 0;
//     const maxAttempts = 5;
    
//     while (guesses < maxAttempts) {
//       const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
//       guesses++;
    
//       if (userGuess === secretNumber) {
//         console.log("You guessed it! The number was", secretNumber);
//         break;
//       } else if (userGuess > secretNumber) {
//         console.log("Too high! Guess lower.");
//       } else {
//         console.log("Too low! Guess higher.");
//       }
//     }
    
//     if (guesses === maxAttempts) {
//       console.error("Out of guesses! The number was", secretNumber);
//     }
    
//   }

//   return vowelCount;
// }

// Example usage:
// const message = "Hello, woruld!";
// const vowelCount = countVowels(message);
// console.log("Number of vowels:", vowelCount); // Output: Number of vowels: 4

