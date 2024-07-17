// var firstName = prompt("Please enter a first name");

// var capitalizedFirstName =firstName.toUpperCase();
// var lastName = prompt("Please enter a last name");
// var smallestLastName = lastName.toLowerCase();

// var fullName = capitalizedFirstName + " " + smallestLastName;
// console.log(firstName + " " + lastName + " " + fullName);
// console.log(capitalizedFirstName);
// console.log(smallestLastName);
// console.log(fullName);

// var bankAccount =["hbl","abl","mbl","mcb"];

// if(bankAccount === "hbl"){
//  alert("Yes,I have a bank account")
// }else if(bankAccount === "abl"){
//     alert("Yes,I  have a bank account")
// }else if(bankAccount === "mbl"){
//     alert("Yes, I  have a bank account")
// }else if(bankAccount === "mcb"){
//     alert("Yes, I  have a bank account")
// }else{
//     alert("No, I don't have a bank account")
// }
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);

const fors = points.forEach(function(point){
    return point;})

const alpha = ["g","f","e","y","t"];

const A =alpha.sort(function(b, a){
    return b -a;
})

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.filter((x) => x > 5);
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);


const red= [1,2,3,4,5,6,7,8,9,10];

function alltred(value,acc,index) {
  const returns = value + acc;
  console.log(`value: ${value}, index: ${index} accumulator: ${acc}`);
  return returns;
}
red.reduceRight(alltred);

const were =red.every((value)=> value === 8);

console.log(were);

var ages = [20,44,96,33,20,33];

var total = ages.every((age)=> age >= 18)
console.log(total);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for(let x of f){
  
  console.log(x);
}
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);