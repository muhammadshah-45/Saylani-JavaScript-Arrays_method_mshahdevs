const triangle = { a: 1, b: 2, c: 3 };
const student = {name:"Shah", age:34};
function ColoredTriangle() {
  this.color = "red";
  this.name = "Muhammad";
}

// ColoredTriangle.prototype = triangle;
ColoredTriangle.prototype= student;

const obj = new ColoredTriangle();
// console.log(obj);
for (const prop in obj) {
  // console.log(obj);
  console.log(`${prop} : ${obj[prop]}`);
  if (Object.hasOwn(obj, prop)) {
    // console.log(obj);
   // console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

const employee={
  name: "John Doe",
  age: 30,
  department: "Sales",
  salary: 5000
}

const employee2 ={
 name: employee.name,
 salary: employee.salary
};

console.log(employee);
console.log(employee2);

