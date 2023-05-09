/*
Mathematical Operators and Precedence
BODMRAS Rule
Precedence (Order of evaluation)
B - Bracket
DMR - Division(D), Multiplication(M), Reminder(R)
AS - Addition(A), Subtraction(S)
*/

console.log(2 + 10 * 3)  //32
console.log(10 + 20);    //30 - addition
console.log(10 % 3);    // 1 - reminder

console.log("Java" + "Script") // concatination of String
console.log("Java" + 1) // concatination
console.log("Java" + 1 + 3) // concatination

console.log('java1' * 1 + 4 / 2); // Nan - Not a Number


/*
Relational Operators  - return always boolean data types.

Greater than ( > )
Less Than ( < )
Greater than or equal to ( >= )
Less than or equal to ( <= )
Equal to ( === ) Strictly equality operator
Not Equal to ( !== )

*/

console.log("5" == 5) //true
console.log("5" === 5) //false beacuse of strict equality

console.log(true == 1) // true
console.log(true === 1) // false


console.log(9 != 7); // true  (opposite of False)
console.log(30 != 30); // false

//if-else condition

let temp = 30;

if (temp > 30) {
  console.log("Hot weather");
} else {
  console.log("chilled one")
}

//function declaration
//function functionName(param1, param2){body...}
//calling --> functionName(argument1, argument2);

// If we passing parameter in function then it is called as parametric function.

let bangaloreTemp = 24;
let mumbaiTemp =35;

function cityWeather(cityTemp) {    
  if (cityTemp > 30) {
    console.log("Hot weather");
  } else {
    console.log("chilled weather")
  }
}
cityWeather(bangaloreTemp);
cityWeather(mumbaiTemp);

//argument is the value passed when calling the function.

//check the person is adult or not based on age


function isAdult(age){
  if(age > 0 && age >= 18){
    return "Adult";
  }else{
    return "Minor";
  }
}
console.log(isAdult(19));
console.log(isAdult(17));