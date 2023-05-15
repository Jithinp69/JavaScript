function ignoreFalsyValue(arr) {
  let positive = [];
  for (let i = 0; i < arr.length; i++) {


    // if (
    //   arr[i] == "" ||
    //   arr[i] == false ||
    //   arr[i] == null ||
    //   arr[i] == 0 ||
    //   arr[i] == undefined
    // ) {
    //     // Do Nothing (Pass to next itarate)
    // } else {
    //   positive.push(arr[i]);
    // }

    // using not equal condition

    if (
        arr[i] != "" &&
        arr[i] != false &&
        arr[i] != null &&
        arr[i] != 0 &&
        arr[i] != undefined
      ) {
        positive.push(arr[i]);
      }

  }
  return positive;
}

let result = ignoreFalsyValue([7, "ate", '', false, 9]);
let result1 = ignoreFalsyValue([false, null, 0, undefined, '']);
let result2 = ignoreFalsyValue([null, 1, 2, undefined]);

console.log(result);
console.log(result1);
console.log(result2);
