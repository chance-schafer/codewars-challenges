// Jaden Casing Strings

String.prototype.toJadenCase = function () {
  let result = this;

  if (this.length !== 0) {
    result = this.split(' ').map((word) => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
  }
  return result.join(' ');
};
