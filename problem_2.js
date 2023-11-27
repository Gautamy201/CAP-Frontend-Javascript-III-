function findAbsoluteDifference(num1, num2) {
  // Calculate the absolute difference using Math.abs()
  var absoluteDifference = Math.abs(num1 - num2);
  
  // Return the result
  return absoluteDifference;
}

// Example usage:
var number1 = 8;
var number2 = 3;

var result = findAbsoluteDifference(number1, number2);
console.log("The absolute difference is: " + result);