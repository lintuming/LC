/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let total=0
  function iter(s,t){
    for(let i=0;i<s.length;i++){
      if(s[i]!==t[0]){
        continue;
      }
      iter()
    }
  }
};
// @lc code=end

