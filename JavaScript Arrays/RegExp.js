const re = /ab+c/i; // literal notation
// OR
const re1 = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// OR
const re2 = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument

console.log(re);
console.log(re1);
console.log(re2);

const re3= /\m+/;
const re4= new RegExp("//e+/");
console.log(re3);
console.log(re4);
setTimeout(() => {
    try {
        blal();
        console.log("bla");
      }
      catch(err) {
     
        console.log(err.stack);
    
      }  
}, 2000);

