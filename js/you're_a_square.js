//You're A Square
//Given an integral number, determine if it's a square number:

let isSquare = function (n) {
  if (Math.sqrt(n) % 1 === 0) {
    return true;
  } else return false;
};
