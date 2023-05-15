//You are given a number size as an argument. You have to implement a function createMatrix that:
//Creates a 2D array with the number of rows and columns equal to size
//Fills the array with numbers from 0 to size - 1 and return the 2D array.
"Use Strict";

function createMatrix(size) {
  let array = [];
  let newArray = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (newArray.length < size) {
        newArray.push(j);
      }
    }
    array.push(newArray);
  }

  return array;
}

console.log(createMatrix(3));
