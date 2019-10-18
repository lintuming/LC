/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }
  let i = 0,
    j = nums.length - 1,
    finded = -1;
  while (i <= j) {
    const mid = ~~((i + j) / 2);
    if (nums[mid] === target) {
      finded = mid;
      break;
    }
    if (target < nums[mid]) {
      j = mid - 1;
    }
    if (target > nums[mid]) {
      i = mid + 1;
    }
  }
  if (finded === -1) return [-1, -1];
  let left = finded,
    right = finded;
  while (left > 0 && nums[left] === nums[left - 1]) {
    left--;
  }
  while (nums[right] === nums[right + 1]) {
    right++;
  }
  return [left, right];
};
// @lc code=end
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
