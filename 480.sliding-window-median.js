/*
 * @lc app=leetcode id=480 lang=javascript
 *
 * [480] Sliding Window Median
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const median = [];
  const isEven = k % 2 === 0;
  for (let i = 0; i <= nums.length - k; i++) {
    const window = nums.slice(i, i + k).sort((a, b) => a - b);

    if (isEven) {
      median.push((window[k / 2] + window[k / 2 - 1]) / 2);
    } else {
      median.push(window[(k / 2) | 0]);
    }
  }
  return median;
};
// @lc code=end
console.log(medianSlidingWindow([1, 4, 2, 3], 4));
