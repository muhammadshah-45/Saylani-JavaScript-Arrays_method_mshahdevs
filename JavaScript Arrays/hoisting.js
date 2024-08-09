// js context
// global context
/* exicution context :-
                        variable object
                        scope chain
                        this keyword
*/


// 2 rules :
// 1 . function declartion are sacnned and made avialable
// 2 . variable declaration are scanned and made undefind

tipper(10)

function tipper(a){
    let bill =parseInt(a)
    console.log(bill+ 5);
}


//bigtipper(10) // it will give error bcz it is beame var

let bigtipper = function(b){
    let bill = parseInt(b)
    console.log(bill+ 5);
}

console.log(namee);//undefined

var namee = "jay"
console.log(namee);

function sayName(age){
    var namee = "Muhammad";
    console.log(age,namee);
}
sayName(34)

console.log(namee);
