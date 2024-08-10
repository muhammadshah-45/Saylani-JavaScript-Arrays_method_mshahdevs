function myt(){
    return this;
}

console.log(myt());

const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    
    my:function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
}
let d= person.my.bind(person2);
console.log(d);


console.log(this);
let cricket = "cricket";
