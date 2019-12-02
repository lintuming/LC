/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const result = [];
  const buffer = [];
  function backTrack(lastTransformed) {
    if (lastTransformed === endWord) {
      return result.push(buffer.slice());
    }
    if(lastTransformed)
    buffer.push(lastTransformed);
    for (let i = 0; i < beginWord.length; i++) {
      const cutted = lastTransformed.slice(0, i) + lastTransformed.slice(i + 1);
      for (let j = 0; j < wordList.length; j++) {
        const word = wordList[j];
        const wordCutted = word.slice(0, i) + word.slice(i + 1);
        if (wordCutted === cutted) {
          backTrack(word);
        }
      }
    }
    buffer.pop();
  }
  backTrack(beginWord);
  return result;
};
// @lc code=end
console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
