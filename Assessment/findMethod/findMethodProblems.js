//Write a function that uses the find() method to return the first element from an array that is greater than 10.

let arr = [1,2,4,6,7,16,11,12,20];

function greaterThan10(){
    return arr.find((val) => val>10)
}
// console.log(greaterThan10(arr));