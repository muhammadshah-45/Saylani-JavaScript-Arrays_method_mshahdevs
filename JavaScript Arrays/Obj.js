let n = "name";
let pr ={
    ["user"+n]: "Muhammad",
    'show d'(){
       return `${this.username}`;
    }
}
console.log(pr['show d']());              


let name = "Shah";
let age = 34;

let obj ={
    name,
    age,
    'show d'(){
        console.log(this.age + this.name );
    }
}
const array = [1,2,3,4];
const obj1 ={a:1,b:2,c:3};
console.log(array.length);

let a = array.push(obj1);
let b = obj1.a = 4;
console.log(b);
console.log(array[4].a);