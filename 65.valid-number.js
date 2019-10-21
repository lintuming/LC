/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim().split("e");
  if (s.length > 2) return false;
  const beforeE = s[0],
    afterE = s[1];
  let start = 0;
  if (["+", "-"].includes(beforeE[0])) start = 1;
  function isValid(value){
    if(['+','-'].includes(value))return false;
  }
  for(let i = start; i < beforeE.length;i++){

  }
};
// @lc code=end
