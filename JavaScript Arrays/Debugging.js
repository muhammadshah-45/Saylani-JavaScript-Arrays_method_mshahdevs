const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;
console.log(triangle);
const obj = new ColoredTriangle();
console.log(obj);
for (const prop in obj) {
    console.log(`colored: ${prop} and obj prop: ${obj[prop]}`);
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Logs:
// "obj.color = red"
