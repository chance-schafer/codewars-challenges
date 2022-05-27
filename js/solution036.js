// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  if (array.length > 0) {
    let total = array.reduce((c, p) => c + p);
    return total / array.length;
  } else {
    return 0;
  }
}
