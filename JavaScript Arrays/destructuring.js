//Create an Object with person variable 

    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        eyeColor: "blue"
    };

    var {lastName, firstName} = person;

    console.log(firstName);
    console.log(lastName);

    //Create a string "Muhammad" with student variable.
    var student = "Muhammad";
    var [a1,a2,a3,a4,a5] = student;

    console.log(length);


    // Create a fruits array 
    
    var fruits = ["apple", "banana", "orange", "grape"];
    var [fruit1,,, fruit2] = fruits;

    
    var {[0]:fruit1,[3]:fruit2} =fruits;
    var[a,b,...rest] = fruits;
        console.log(fruit1,fruit2);
        console.log(rest);

 const fruit = new Map([
    [ "apple",300],
    [ "banana",400],
    [ "orange",500],
 ]);
 let text = "";
 for(const [key , value] of fruit) {
  text += key + " is " + value;
  console.log(text);  
 }

 let fName = "Muhammad";
 let lName = "Shah";

 [fName, lName] = [lName, fName];
 console.log(fName, lName);

