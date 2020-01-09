/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let i = 1;
  let zeroCount = 0;
  while(i<=n){
    if(i%5===0){
      zeroCount++
    }
    i++
  }
  return zeroCount
};
// @lc code=end
function multiply(n){
  if(n===1)return 1
  return n*multiply(n-1)
}
console.log(multiply(30))
console.log(trailingZeroes(20))