// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let numArray = numbers.split(" ").sort((a, b) => a - b);
  return `${numArray[numArray.length - 1]} ${numArray[0]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
