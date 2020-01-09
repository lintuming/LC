/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let right = nums.length - 1,
    i = right - 1;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    while (right >= 0 && nums[right] <= nums[i]) {
      right--;
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
  }

  let j = i + 1,
    m = nums.length - 1,
    stop = (j + nums.length) >>> 1;
  for (; j < stop; j++, m--) {
    [nums[j], nums[m]] = [nums[m], nums[j]];
  }
};
// @lc code=end
console.log(nextPermutation([5, 4, 7, 5, 3, 2]));
