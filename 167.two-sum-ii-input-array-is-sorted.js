/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 1; i < numbers.length; i++) {
    const rest = target - numbers[i];
    for (let j = 0; j < i; j++) {
      if (numbers[j] === rest) {
        return [j+1, i+1];
      }
    }
  }
};
// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9));
