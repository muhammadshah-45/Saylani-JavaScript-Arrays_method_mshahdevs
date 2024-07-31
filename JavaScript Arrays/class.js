class RailwayForm{
    submit(){
        alert(this.name + "Submited form submission");
    }
    cancel(){
        alert(this.name + "Form submission cancelled");
    }
    fill(givenName){
        this.name = givenName;
    }
}

let shah = new RailwayForm();
shah.fill("Devs");
let yumna = new RailwayForm();

yumna.fill("Yumna");
class Car {
    constructor(name, year){
        this.name = name;
        this.age = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.age;
    }
}
const myName = new Car("Muhammad",2013);
console.log(myName);


class Product{
   constructor(name,price){
     this.name = name;
     this.price = price;
   }
   displayProduct(){
    console.log(`Product ${this.name}`);
    console.log(`Price ${this.price}`);
   }
   calculateTax(salesTax){
    return this.price +(this.price * salesTax);
   }

}
let salesTax = 0.05;
const product1 = new Product("Shirt",34.4);
product1.displayProduct();
const totalPrice =product1.calculateTax(salesTax);
console.log(totalPrice);


class ToyotaCar {
    setbrand(brand){
        this.brand = brand;
    }
}

let e = new ToyotaCar();
e.setbrand("fortuner")


class Cars{
    constructor(name){
        this.name = name;
    }
    static brand(x){
        return "Hello, " + x.name;
    }
}
const myCar = new Car("corola");
