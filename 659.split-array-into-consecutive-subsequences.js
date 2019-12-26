/*
 * @lc app=leetcode id=659 lang=javascript
 *
 * [659] Split Array into Consecutive Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const counts = {};
  const need = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    counts[n] = counts[n] + 1 || 1;
  }
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (counts[n] === 0) continue;
    if (need[n] > 0) {
      need[n]--;
      need[n + 1] = need[n + 1] + 1 || 1;
    } else if (counts[n + 1] > 0 && counts[n + 2] > 0) {
      counts[n + 1]--;
      counts[n + 2]--;
      need[n + 3] = need[n + 3] + 1 || 1;
    } else {
      return false;
    }
    counts[n]--;
  }
  return true;
};
// @lc code=end
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]));
