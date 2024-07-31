const employee ={
    calcTax(){
        console.log(`tax rate is 10%`);
    }

};

const mshah = {
    salary :2500,
};
mshah.__proto__ = employee;
