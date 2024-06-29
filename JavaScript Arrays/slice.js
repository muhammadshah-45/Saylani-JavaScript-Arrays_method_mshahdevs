let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));// 
//Output : Array ["camel","duck","elephant"]


console.log(animals.slice(2,4)); 
//Output :Array ["camel","duck"]

console.log(animals.slice(1,5));
//Output :Array ["bison","camel","duck","elephant"]

console.log(animals.slice(1,-2));
//Output: Array [""]

// let's check original Array (animals)


console.log(animals);