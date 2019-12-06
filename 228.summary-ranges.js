/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];
    let j = i + 1;
    let prev = start;
    while (j < nums.length && nums[j] === prev + 1) {
      prev = nums[j];
      j++;
    }
    j--;
    if (prev === start) {
      result.push(start + "");
    } else {
      result.push(`${start}->${prev}`);
    }
    i = j;
  }
  return result;
};
// @lc code=end
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
