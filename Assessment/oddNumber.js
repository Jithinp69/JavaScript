//print odd numbers till given number (n)

function oddNumbers(n) {
  let oddNumArray = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      oddNumArray.push(i);
    }
  }
  return oddNumArray;
}

console.log(oddNumbers(10));
console.log(oddNumbers(25));
console.log(oddNumbers(5));
