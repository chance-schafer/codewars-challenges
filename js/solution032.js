// Square(n) Sum

function squareSum(numbers){
  let sum = 0
  for (let i = 0; i < numbers.length; i++ ) {
    sum += numbers[i] ** 2
  }
  return sum
}
/*
function squareSum(numbers){
  return numbers.reduce((sum, num) => sum + (num * num), 0)
}
*/
console.log(squareSum([1,2]), 5)