const fruit = ["Mango","orange","apple","banana"];

for (let i of fruit) {
    console.log(`fruit:  ${i}`);
}

const iterable = [10, 20, 30, 40, 50, 60];

for (let value of iterable) {
    value += 3 * 2;
    console.log(`Value:  ${value}`);
}

const str ="Muhammad";

for (let i of str) {
    console.log(`str:  ${i}`);
}