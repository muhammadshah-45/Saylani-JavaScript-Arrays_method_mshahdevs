
const getPersonData =() => ({
    name: "Umna Naveed",
    age: 34,
    department:"Marketing",
  });
  
  const getPersonData2 =() => (["Hamad",45]);
  
  console.log(getPersonData());

  const myFunction = true
     ? () => console.log("true")
     : () => console.log("false");


    let o = x => x * 2;
    let q = x => x - 1;
    let p = x => x * 2;
    let r = x => x + 1;

    let myNumb= 42;

    let result = o(myNumb);

    let functionsArray = [
        p,
        q,
        r
    ]

    