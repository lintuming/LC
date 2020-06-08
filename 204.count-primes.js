/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 2) return 0;
  const primes = Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; i * j < n; j++) {
      primes[i * j] = false;
    }
  }

  return primes.reduce((total, isPrime) => {
    if (isPrime) {
      total++;
    }
    return total;
  }, 0);
};
// @lc code=end
