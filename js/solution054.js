function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((a, i, w) => {
      console.log(w.indexOf(a));
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncode("pickle"));
