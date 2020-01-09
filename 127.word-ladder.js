/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
  let minLen = Number.MAX_VALUE;
  const dict = new Set(wordDict);
  const A = "a".charCodeAt();
  let level = 1;
  const paths = [[beginWord]];
  const words = new Set();
 while (paths.length) {
    const path = paths.shift();
    if (path.length > level) {
      words.forEach(w => {
        if (dict.has(w)) {
          dict.delete(w);
        }
      });
      level = path.length;
    }
    const last = path[path.length - 1];
    for (let i = 0; i < last.length; i++) {
      for (let j = A; j <= A + 25; j++) {
        const newWord =
          last.slice(0, i) + String.fromCharCode(j) + last.slice(i + 1);
        if (!dict.has(newWord)) continue;
        words.add(newWord);
        if (newWord === endWord) {
          minLen = path.length + 1;
          return minLen;
        }else{
          paths.push([...path,newWord]);
        }
      }
    }
  }
  return 0
};
// @lc code=end
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
