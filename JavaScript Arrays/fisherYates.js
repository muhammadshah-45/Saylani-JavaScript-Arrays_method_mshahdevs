

var points = [40,100,1,5,25,10];

function myArrayMin(arr){
    var len = arr.length;
    console.log("line7",{len}); // 6
    var max = -Infinity;
    console.log("line9",{len,max}); // 6 , infinity
    while(len--){
        console.log("line11",{len}); // 5 4 3
        if(arr[len] > max){
            console.log("line13",{currentValue:arr[len]}); // 10  5
            max = arr[len];
            console.log("line15",{max}); // 10 5 
        }
    }
    return max;
}

console.log(myArrayMin(points));

