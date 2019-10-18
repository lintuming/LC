/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [],
    buffer = [];

  function backTrack(rest) {
    if (rest.length === 0) return result.push(buffer.slice());

    for (let i = 0; i < rest.length; i++) {
      if (!(i > 0 && rest[i] === rest[i - 1])) {
        buffer.push(rest[i]);
        backTrack([...rest.slice(0, i), ...rest.slice(i + 1)]);
        buffer.pop();
      }
    }
  }
  backTrack(nums);
  return result;
};
// @lc code=end
console.log(permuteUnique([1, 1, 2]));
