// Even or Odd

function even_or_odd(number) {
  let val = number % 2;
  if (val === 0) {
    return 'Even';
  } else {
    return 'Odd'
  }
}