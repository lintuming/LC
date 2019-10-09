/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const forwards = [];
  for (let i = 0; i < ratings.length; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      forwards[i] = forwards[i - 1] + 1;
      continue;
    }
    forwards[i] = 1;
  }
  const backWards = [...forwards];
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
      backWards[i] = Math.max(forwards[i],backWards[i + 1] + 1);
      continue;
    }
  }
  return backWards.reduce((sum,item)=>sum+item,0)
};
// @lc code=end

console.log(candy([1,3,4,5,2]));
