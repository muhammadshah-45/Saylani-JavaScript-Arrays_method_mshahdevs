// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   let text = "";
//   fruits.forEach (function(value, key) {
//     console.log(value);
//     text += key + ' = ' + value + "<br>"

//     console.log(text);
    
//   })
  
//   const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ];

//   const result = Object.groupBy(inventory, ({ type }) => type);
//  console.log(result);
// /* Result is:
// {
//   vegetables: [
//     { name: 'asparagus', type: 'vegetables', quantity: 5 },
//   ],
//   fruit: [
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "cherries", type: "fruit", quantity: 5 }
//   ],
//   meat: [
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "fish", type: "meat", quantity: 22 }
//   ]
// }
// */

// function myCallback({ quantity }) {
//     return quantity > 5 ? "ok" : "restock";
//   }
  
//   const result2 = Object.groupBy(inventory, myCallback);
//   console.log(result2);
//   /* Result is:
//   {
//     restock: [
//       { name: "asparagus", type: "vegetables", quantity: 5 },
//       { name: "bananas", type: "fruit", quantity: 0 },
//       { name: "cherries", type: "fruit", quantity: 5 }
//     ],
//     ok: [
//       { name: "goat", type: "meat", quantity: 23 },
//       { name: "fish", type: "meat", quantity: 22 }
//     ]
//   }

//   */
 const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 9 },
  { name: 'bananas', type: 'fruit', quantity: 5 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 12 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity > 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
  
const person = [
  {name:"Muhammad",age:22},
  {name:"Shah",age:34},
  {name:"Ahmed",age:27},
  {name:"Faruk",age:25},
  {name:"John",age:32},
]

const groupByage =Map.groupBy(person,(person)=> person.age);
console.log(groupByage);