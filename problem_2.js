function findAbsoluteDifference(num1, num2) {
  // Calculate the absolute difference using Math.abs()
  var absoluteDifference = Math.abs(num1 - num2);
  
  // Return the result
  return absoluteDifference;
}

// problem_1:
var number1 = 12;
var number2 = 4;

var result = findAbsoluteDifference(number1, number2);
console.log("The absolute difference is: " + result);

// problem_2:
var numbers1 = 4;
var numbers2 = 18;

var result = findAbsoluteDifference(numbers1, numbers2);
console.log("The absolute difference is: " + result);
