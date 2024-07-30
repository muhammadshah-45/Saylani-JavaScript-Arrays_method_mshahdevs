// try {
//     blabla();
// } catch (error) {
//     if(error instanceof ReferenceError) {
//         console.log("ReferenceError");
//     }else if(error instanceof SyntaxError) {
//        console.log("SyntaxError");
//     } else if(error instanceof TypeError) {
//     console.log("TypeError");
//     } else if(error instanceof RangeError) {
//         console.log("RangeError");
//     } else {
//         console.log("Unknown Error");
//     }
     
// }

try {
    let json ='{"age":23}';
    let user = JSON.parse(json);
  if(!user.data) {
    throw new Error("Incomplete JSON data")
  }
    console.log(user.data);
    console.log(user.age);
    
} catch (error) {
   console.log(error);
}finally{
    console.log("Finally logged");
}