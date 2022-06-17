// Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  for (let i = 0; i <= A.length - 1; i++) {
    let valLength = A.filter((val) => val === A[i]).length;

    if (valLength % 2 !== 0) {
      return A[i];
    }
  }
}
