/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] === num) {
        return num;
      }
    }
  }
};
// @lc code=end
console.log(findDuplicate([3,1,3,4,2]))
