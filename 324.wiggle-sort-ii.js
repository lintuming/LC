/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  let temp = nums.slice();
  temp = temp.sort((a, b) => a - b);
  const l = nums.length;
  let mid = ((l - 1) / 2) | 0,
    end = l - 1;
  for (let i = 0; i < l; i++) {
    nums[i] = i % 2 === 0 ? temp[mid--] : temp[end--];
  }
};
// @lc code=end
