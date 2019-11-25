/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let dup = 0;
  let currentContext = "";
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (currentContext !== num) {
      currentContext = num;
      dup = 1;
      continue;
    } else {
      if (dup === 2) {
        nums.splice(i, 1);
        i--;
      } else {
        dup++;
        continue;
      }
    }
  }
};
// @lc code=end
