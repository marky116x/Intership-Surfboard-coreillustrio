// -4.Create a function that calculates the sum of all numbers in an array.

function sumArr(){
    let array = [1,2,3,4,5] , sum = 0

    for(i=0; i < array.length; i++){
        sum += array[i]; 
    }

    return sum
}

let a = sumArr()
console.log(a)

// ------------M-------A--------P--------------


// const array = [1,2,3,4];
// let sum=0;
// const map1 = array.map((x)=> sum += x )
// console.log(sum);


// ------------M-------A--------P--------------