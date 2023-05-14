function findFibonacci(n) {
  let fib = [];
  let tempFib = null;
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      fib.push(i);
    } else if (i > 1) {
      tempFib = fib[i - 1] + fib[i - 2];
      fib.push(tempFib);
    }
  }
  console.log(fib);
  console.log(fib[n]);
}

findFibonacci(7); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,  89,  144,  233,  377, 610, 987, 1597, 2584, 4181]

function findfibUsingWhile(n) {
  if (n <= 1) {
    return n;
  }
    var a = 0;
    var b = 1;
    while (n > 1) {
      var sum = a + b;
      a = b;
      b = sum;
      n--;
    }
    console.log(b);
    return b;
  }
 
findfibUsingWhile(7);
