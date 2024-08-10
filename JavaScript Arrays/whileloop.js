let arr= [1,2,3,4,5,6,7,8,9,10];
let i = 0; 
while (i < arr.length) {
   console.log(arr[i] * 3);
   i++; 
}

let str = "Muhammad Shah";
let j = 0;
while (j < str.length) {
   console.log(str[j]);
   j++;
}

// for(let i = 0; i < str.length; i++) {
// console.log(i);
// }
let input;
do {
  input = prompt("Enter a number greater than 0:");
  console.log(input);
} while (input <= 0);
