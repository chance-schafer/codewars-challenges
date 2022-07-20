// Check same case

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b) {
  if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) {
    return -1;
  } else if (
    (a.toUpperCase() === a && b.toUpperCase() === b) ||
    (a.toLowerCase() === a && b.toLowerCase() === b)
  ) {
    return 1;
  } else {
    return 0;
  }
}
