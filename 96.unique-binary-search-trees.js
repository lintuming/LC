/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = Array(n+1).fill(0);
  dp[0]=dp[1]=1
  function iter(n){
    if(!dp[n]){
      for(let i=1;i<=n;i++){
        dp[n]+=iter(i-1)*iter(n-i)
      }
    }
    return dp[n]
  }
  
  return iter(n)
};
// @lc code=end
