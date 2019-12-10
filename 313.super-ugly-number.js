/*
 * @lc app=leetcode id=313 lang=javascript
 *
 * [313] Super Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const pLen = primes.length;
  const increase = Array(pLen).fill(0);
  const current = [];
  const output = [1];
  const ops = [];
  while (!output[n - 1]) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < pLen; i++) {
      current[i] = output[increase[i]] * primes[i];
      min = Math.min(current[i], min);
      ops.push(() => {
        if (min === current[i]) {
          increase[i] += 1;
        }
      });
    }
    output.push(min);
    while (ops.length) {
      ops.pop()();
    }
  }
  return output[n - 1];
};
// @lc code=end
