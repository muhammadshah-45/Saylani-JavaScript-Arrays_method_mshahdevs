
// // const person ={
// //     firstName:"Muhammad",
// //     lastName:"Shah",
// //     age:20,
// //     marks:"#4$$",
// //     language:"pashto",
// //     get lang(){
// //         return this.language.toUpperCase(); //;
// //     }
    
// // }
// // const person2 = {
// //     fullName:"Muhammad Shah",
// //     language:"",
// //     set lang(lang){
// //         this.language = lang;
// //     }
// // }

// // console.log(person2.lang='ENGLISH');
// // console.log(Object.defineProperty(person,"address",{value:"sheikh Muhammadi"}));
// // console.log(Object.defineProperty(person,"firstName",{value:"Devs"}));

// // console.log(Object.getOwnPropertyNames(person));
// // document.getElementById("demo").innerHTML = person.address;


// // console.log(Object.defineProperty(person,"fullName",{
// //     get:function(){return this.firstName + " " + this.lastName},
// // }));
// // console.log(person.fullName);

// const person = {firstName:"John", lastName:"Doe"};

// // Prevent Extensions
// Object.preventExtensions(person)

// // Test Error
// let text = "";
// try {
//   person.nationality = "English";
// }
// catch (err) {
//   text = err;
// }

// console.log(text);

// const myFunction = new Function("a","a","return a + a");

// function my(a,a){return a + a};

// (function (){
//   let x ="Hello world!";
//   console.log(x);;
// })()

// function my(a,b){
//   return arguments.length;
// }
// console.log(my(3,4));

// let x = function (a, b){
//   return a + b
// };
// let y = x.toString();
// console.log(y);
// console.log(x(3,4));
// console.log(typeof x);

// function first(a,b){
//   return a + b;
// }


// function myFunction(x, y) {
// console.log("line78",{x,y});
//   if (y === undefined) {
//   console.log("line80",{y});
//     y = 2;
//   }  
//   return x * y;
// }
// myFunction(3);

// function myFirst(x, y =4){
//   return x + y;
// }

// console.log(myFirst(4));

// function sum(...args) {
//   let sum = 0;
//   // console.log("line95",{args}); // [4, 9, 16, 25, 29, 100, 66, 77]
//   for (let arg of args) sum += arg;
//   // console.log("line97",{arg}); // [4, 9, 16, 25, 29
//     //[4, 9, 16, 25, 29
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);



// let d = myFunction();
// function myFunction() {
//   return this;
// }
// console.log(d);
// //Invoking the function as a  constructor function
// function my(arg1,arg2) {
//   this.firstname = arg1;
//   this.lastname = arg2;
// }

// const myO =new my("shah","devs");

// console.log(myO.firstname);

// const student = {
//   fullName: function (city,country){
//     return this.firstname + " " + this.lastname + " " + city + country;
//   }
// }
// const student1 = {
//   firstname : "Shah",
//   lastname : "der"
// }

// console.log(student.fullName.call(student1,"peshawar","Pakistan"));
// // console.log(student.fullName.apply(student1,["peshawar","Pakistan"]));


// const persons = {
//   fullName:function (){
//     return this.firstName + " " + this.lastName  ;
//   }
  
// }
// const persons1 ={
//   firstName :"Muhammad",
// lastName:"Shah",
// };

// const persons2 = {
//   firstName :"Ali",
//   lastName:"Khan",
// }
// let a =persons.fullName.bind(persons1);
// console.log(a());

// let C = 3,b = 2;

// function u(){
// // let c = 3,b = 3;
//   return C + b;
// }
// console.log(u());



const person = {};

person.firstName = 'John';
person.lastName = 'Shah';
person.age = 34;
person.fullName = function(){
  return this.firstName +'' + this.lastName;
}

delete person.firstName;

console.log(person);
console.log(person.fullName());

// Using the new keyword of Object creation

const person2 = new Object();
person2.firstName = 'Muhammad';
person2.lastName = 'Shah';
person2.age = 34;
person2.gender = "male";
person2["marks"] = 343;
console.log(person2);
console.log(person2.firstName);
console.log(person["lastName"]);

const person3 = {
  firstName:"Alice",
  lastName:"Bob",
  age: 34,
  fullName: function(){
    return person3.firstName + " " + person3.lastName;
  }
}
console.log(person3);

//Nested Objects creation

const myObj = {
  name:'Ali',
  gender:"male",
  age: 34,
  marks: 334,
  // myCars:{
  //   car1 : "Civic",
  //   car2:"Toyota",
  //   car3:"bicycle",
  // }
}
// let text = "";

// for (let i in myObj) {
//  text += myObj[i] + "<br>";
//  console.log(text);
// }
// console.log(myObj);
// console.log(myObj.myCars);
// console.log(myObj.myCars["car1"]);


// console.log(myObj.myCars.car2);

const array =[1,2,3];
const obj ={a:1,b:2,c:3}
array.push(obj);
obj.a=3;

console.log(array[3].a);


const fruit={
  name:"apple",
  color:"red",
  weight:100,
  price:50,
 
}

for(const property in fruit){
  console.log(`${property}: ${fruit[property]}`);
}



let name = "Hammad";
let age = 23;

// let obj1={
//   name,
//   age,
//   detail(){
//     return `${this.name}`;
//   }
// }

let fname= "John";
let course = "Course";
function test(name, course){
  let fullName= name + " " + course;
  return {fullName,name, course}
}
let s = test(fname, course);
console.log(s.fullName);
console.log(s.course);

let obj1={
  name,
  age,
  'detail show'(){
    return `${this.name}`;
  }
}
console.log(obj1);
console.log(obj1['detail show']());

let n  ="name";

let obj2={
  ["first" + n]:"Shah",
}
console.log(obj2);