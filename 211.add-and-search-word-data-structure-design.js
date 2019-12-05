/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
function search(word, words) {
  if (words.includes(word)) {
    return true;
  }
  function backTrack(searchWord, matchWord) {
    if (searchWord.length !== matchWord.length) return false;
    if (!searchWord && !matchWord) return true;
    const m = matchWord[0];
    const l = searchWord[0];
    if (m === "." || l === m) {
      return backTrack(searchWord.slice(1), matchWord.slice(1));
    }
    return false;
  }
  return words.some(w => backTrack(w, word));
}
var WordDictionary = function() {
  this.words = [];
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  if (!this.words.includes(word)) {
    this.words.push(word);
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return search(word, this.words);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
