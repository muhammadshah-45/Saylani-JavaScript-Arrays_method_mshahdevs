function isEven(element){
    if(element % 2 === 0){ // this statement takes even elements/numbers
        return true;
    }
    else{
        return false;
    }

}

console.log(isEven(5));


function isEven(element){
    return element % 2 === 0;
}

console.log(isEven(4));


var isEven = (element) => {
    
    return element % 2 === 0;
}


console.log(isEven(12));

function evenNumber(element) {
    return element % 2 === 0;
}

console.log(evenNumber(3));


var result = [2,4,6,8].every(isEven)

console.log(result);

var result = [2,3,6,8].every(isEven)

console.log(result);


var result = [2,3,6,8].every((e) => (e % 2 == 0) )

/* when we use {} we need return statment otherwise we do not need return 
statment
*/

console.log(result);