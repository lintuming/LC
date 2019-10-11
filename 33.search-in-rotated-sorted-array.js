/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//[4,5,6,7,0,1,2]
//[7,0,1,2,4,5,6]
var search = function(nums, target) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    const mid = ((i + j) / 2) | 0;
    if (target === nums[mid]) return mid;
    if (nums[i] <= nums[mid]) {
      if (target >= nums[i] && target < nums[mid]) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[j]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }
  return -1
};
// @lc code=end
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
