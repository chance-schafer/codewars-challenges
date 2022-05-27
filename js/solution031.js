// Binary Addition

function addBinary(a,b) {
  let val = a + b
  let binary = (val % 2).toString();
  for (; val > 1; ) {
    val = parseInt(val / 2);
    binary = (val % 2) + (binary);
  }
  return binary
}