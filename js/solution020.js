// Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

function sumDigits(number) {
  if(number < 0) {
    number = number * -1
  }
  return String(number)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}