/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const cache = [1];
  let p2 = 0,
    p3 = 0,
    p5 = 0;
  for (let i = 1; i < n; i++) {
    let r2 = cache[p2] * 2,
      r3 = cache[p3] * 3,
      r5 = cache[p5] * 5;
    const min = Math.min(r2, r3, r5);
    if (min === r2) p2++;
    if (min === r3) p3++;
    if (min === r5) p5++;
    cache[i] = min;
  }
  return cache[n - 1];
};

// @lc code=end
