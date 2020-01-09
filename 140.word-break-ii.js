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
  if (s.length === 0) return [];
  const cache = {};
  function backTrack(word) {
    if (cache[word]) {
      return cache[word];
    }
    cache[word] = [];
    for (let i = 0; i < wordDict.length; i++) {
      const wordInDict = wordDict[i];
      if (word.slice(0, wordInDict.length) === wordInDict) {
        if (wordInDict.length === word.length) {
          cache[word].push(wordInDict);
        } else {
          const res = backTrack(word.slice(wordInDict.length));
          const output = res.map(r => wordInDict + " " + r);
          cache[word].push(...output);
        }
      }
    }
    return cache[word];
  } 
  return backTrack(s)
};
// @lc code=end
console.log(wordBreak("aaaaaaa", ["aaaa", "aa", "a"]))
