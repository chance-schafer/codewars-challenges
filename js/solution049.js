// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// function spinWords(str) {
//   let strArray = str.split(" ");

//   const reverseString = (string) => {
//     return string.split("").reverse().join("");
//   };

//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i].length >= 5) {
//       const word = strArray[i];
//       strArray[i] = reverseString(word);
//     }
//   }
//   return strArray.join(" ");
// }

function spinWords(words) {
  return words
    .split(" ")
    .map((word) => {
      return word.length > 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
