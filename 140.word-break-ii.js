/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const froms = [];
  froms[0] = [0];
  const result = [];
  for (let i = 1; i <= s.length; i++) {
    froms[i] = [];
    for (let j = 0; j < i; j++) {
      if (froms[j].length && wordDict.includes(s.slice(j, i))) {
        froms[j].push(i);
      }
    }
  }
  function build(idx, prev) {
    if (idx >= s.length) {
      return result.push(prev);
    }
    if (!froms[idx]) return;
    froms[idx].forEach(function(to) {
      build(to, prev ? prev + " " + s.slice(idx, to) : s.slice(idx, to));
    });
  }
  build(0, "");
  return result;
};

// @lc code=end
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
