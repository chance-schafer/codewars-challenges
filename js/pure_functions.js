//Pure Functions
//You are given a function that is impure, and your job is to purify it. This function must return a new array where each value is itself plus 2 times the "modifier", which is provided as a property of the options object

const state = {
  modifier: 2,
};

function solution(arr, options) {
  arr = arr.slice();
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += 2 * options.modifier;
  }
  return arr;
}
