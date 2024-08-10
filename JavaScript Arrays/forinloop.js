let fruits ={
    name: "Mango",
    price:23,
    quantity:220,
}

for (let key in fruits) {
    console.log(key + ":"+ " " + fruits[key]);
}

// -------- take loops with strings----------//
console.log("take loops with strings");
let str = "Muhammad";

for (let key in str) {
    console.log(key + ":"+ " " + str[key]);
}

for (let key of str) {
    console.log(key);
}

let i = 0;

while (i < str.length) {
    console.log(str[i]);
    i++;
}

for(let j = 0; j < str.length; j++) {
    console.log(str[j]);
}