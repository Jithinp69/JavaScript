var arr = [9, 6, 5, 4, 3, 2, 1, 0];

function nonDecreaseArray() {
  let flag;
  for (let i = 0; i<arr.length-1; i++) {
    if (arr[i] <= arr[i + 1]) {
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
}
console.log(nonDecreaseArray());
