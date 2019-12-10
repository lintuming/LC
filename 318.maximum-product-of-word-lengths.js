/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const A_CODE = "a".charCodeAt(0);
  let res = 0;
  const mask = words.map(word => {
    let m = 0;
    for (let i = 0; i < word.length; i++) {
      m |= 1 << (word.charCodeAt(i) - A_CODE);
    }
    return m;
  });
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((mask[i] & mask[j]) === 0) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }
  return res;
};
// @lc code=end
