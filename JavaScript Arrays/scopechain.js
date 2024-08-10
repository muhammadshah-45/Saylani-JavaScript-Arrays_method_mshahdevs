var name = "Muhammad";

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. M";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Mr. HC";
    console.log("Line number 12", name);
  }
}

sayName();