// Exes and Ohs

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// function XO(str) {
//   let strArray = str.toLowerCase().split('');
//   let xCount = 0;
//   let yCount = 0;
//   strArray.map((x) => {
//     if (x === 'x') {
//       xCount += 1;
//     } else if (x === 'o') {
//       yCount += 1;
//     }
//   });
//   if (xCount === yCount) {
//     return true;
//   } else {
//     return false;
//   }
// }

function XO(str) {
  str = str.toLowerCase().split('');
  return (
    str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
  );
}

console.log(XO('ooxXm'));
