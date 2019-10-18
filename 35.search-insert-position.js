/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0,
    j = nums.length - 1,
    mid;
  while (i <= j) {
    mid = ~~((i + j) / 2);
    console.log(i, j, mid);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return i;
};
// @lc code=end
console.log(searchInsert([1, 3, 5, 6], 2));
