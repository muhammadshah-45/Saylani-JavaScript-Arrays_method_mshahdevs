const d = new Date();
console.log(d.getTimezoneOffset());
console.log(d);
const b = new Date('2023-01-03');
const a = new Date(d.getFullYear(), d.getMonth());
console.log(a);
console.log(
    `
    Year: ${b.getFullYear()}
    Month: ${b.getMonth() + 1}
    Day: ${b.getDate()}
    Hours: ${b.getHours()}
    Minutes: ${b.getMinutes()}
    Seconds: ${b.getSeconds()}
    `
);

const s= new Date("October 10, 2024 11:23:23:");
console.log(s.getDay());
console.log(s.getTime());
console.log(s.getHours());
console.log(s.getUTCDate());
console.log(s.getMinutes());
console.log(s.getSeconds());
console.log(s.getFullYear());
console.log(s.getMilliseconds());
const e = new Date()
console.log(e.toDateString());
console.log(e.toISOString());

const w = new Date(-100000000000000);
console.log(w);

const g= new Date(24*60*60*1000)    
const h = new Date("03/12/2023")
console.log(h.getTime());

const t = new Date("23, Apr, 2012")
const u =Date.parse("March 3, 2012")

let ms = Date.now();

let j = new Date();
console.log(j.setMonth(2));


var color = "green";
switch (color) {
    case 'green':
        console.log("You can go");
        break;
        case 'red':
        console.log("stop");
        break;
        case 'yellow':
            console.log("Slow down");
            break;
           
            

    default:
    console.log("Invalid color");
}

let myArray = [1, 2, 3, 4, 5];

text = "";

for(let i of myArray) {


    console.log(text+=myArray[i]);
}