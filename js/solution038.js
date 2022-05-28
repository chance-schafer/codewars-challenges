// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s) {
  let words = s.split(' ');
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, words[0]);
  return shortest.length;
}
