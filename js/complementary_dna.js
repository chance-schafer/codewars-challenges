// Complementary DNA
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  return dna
    .split('')
    .map((x) => {
      if (x === 'A') {
        return 'T';
      } else if (x === 'C') {
        return 'G';
      } else if (x === 'T') {
        return 'A';
      } else if (x === 'G') {
        return 'C';
      }
    })
    .join('');
}
