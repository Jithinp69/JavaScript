// You are given two arrays arr1 and arr2 as arguments. 
//You have to implement the function sumTwoArrays that will return the total sum of all elements in both arrays.


function sumTwoArrays(arr1, arr2) {
    
    let sum = null;
    for(let i=0;i<arr1.length;i++){
      sum+=arr1[i];
    }
    for(let j=0;j<arr2.length;j++){
      sum +=arr2[j];
    }
    return sum;
  }

console.log(sumTwoArrays([1, 2], [10, 20]));
console.log(sumTwoArrays([10, 20, 30, 40], [1]));
console.log(sumTwoArrays([1, 2, 3], [4, 5, 6]));

