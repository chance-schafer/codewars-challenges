// Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a, b) => {
    return a - b;
  });
  return sorted[0] + sorted[1];
}
