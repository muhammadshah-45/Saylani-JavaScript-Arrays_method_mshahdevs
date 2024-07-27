console.log("running");
// function myFunction() {
//     alert("the page has loaded");
// }
function myOnchange() {
    alert("the value has changed");
}
let studentName = "Muhammad";
let studentemail = "mshahwe@gmail.com";

console.log(studentName.length); //length
console.log(studentName[0]); //Access Property
console.log(studentName.charAt(1)); //Access length property
console.log(studentName.charCodeAt(0));
console.log(studentName.at(0));
console.log(studentName.substring(2,4));
console.log(studentName.substring(-2,3));
console.log(studentName.slice(1,2)); 
// slice and substring is similar that the 2nd value is exclusive
console.log(studentName.substring(1,2));
console.log(studentName.substr(1,2));
console.log(studentName.toUpperCase());
console.log(studentName.toLowerCase());
console.log(studentName.concat(studentemail));
console.log(studentemail.trim());
console.log(studentName.split(','));
console.log(studentemail.split('|'));

let sentence ="A quick jump to the latest one of the studens in The University,and the Latest";

console.log(sentence.replaceAll("the","THE"));
console.log(sentence.replace(/the/g,"THE"));
console.log(sentence.replace(/The/g,"THE"));
console.log(sentence.repeat(3));

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf(/Please/);
let searchValue = text.search(/Please/);
console.log(index);
console.log(searchValue);

