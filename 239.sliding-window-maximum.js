/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const output = [];
  if (nums.length === 0 || k === 0) {
    return output;
  }
  let prevMaxIdx = 0;
  for (let i = 0, j = i + k - 1; j < nums.length; i++, j++) {
    prevMaxIdx = prevMaxIdx >= i ? prevMaxIdx : i;
    let m = prevMaxIdx + 1;
    for (; m <= j; m++) {
      if (nums[m] > nums[prevMaxIdx]) {
        prevMaxIdx = m;
      }
    }
    output.push(nums[prevMaxIdx]);
  }
  return output;
};
// @lc code=end
