function reverseString(str) {
  let name1 = "";

  let str1 = str.split(/(?:)/);
  let i = str1.length - 1;
  while (i >= 0) {
    name1 = `${name1}${str1[i]}`;

    i--;
  }
}

// console.log(reverseString("abcdefghi"));

function isBalanced(exp) {
  let expressionArray = exp.split("");
//   console.log(expressionArray);

  let openBracket = 0;
  let closeBracket = 0;

  for (let i = 0; i < expressionArray.length; i++) {
    if (expressionArray[i] == "{") {
      openBracket++;
    } else if (expressionArray[i] == "}") {
      closeBracket++;
    }
  }

  if (openBracket === closeBracket) {
    return "Balanced";
  } else {
    return "Not Balanced";
  }
}

console.log(isBalanced("{{}}{}{"));
