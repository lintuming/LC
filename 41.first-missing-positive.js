/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for(var i=1; i<Number.MAX_SAFE_INTEGER; i++){
      if(nums.includes(i)){
          continue;
      }else{
          return i;
      }
  }
};
// @lc code=end

