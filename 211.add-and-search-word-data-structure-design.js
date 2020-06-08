/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

class Dict {
  constructor() {
    this.keys = new Map();
    this.hasEnd = false;
  }
  setEnd() {
    this.hasEnd = true;
  }
  isEnd() {
    return this.hasEnd === true;
  }
}

var WordDictionary = function() {
  this.root = new Dict();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  function addWordImpl(dict, word) {
    if (word) {
      if (!dict.keys.has(word[0])) {
        dict.keys.set(word[0], new Dict());
      }
      return addWordImpl(dict.keys.get(word[0]), word.slice(1));
    } else {
      dict.setEnd();
    }
  }
  addWordImpl(this.root, word);
  return true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  function searchImpl(dict, word) {
    if (dict.keys.has(word[0]) || word[0] === ".") {
      if (word.length === 1) {
        if (word[0] === ".") {
          for (let d of dict.keys.values()) {
            if (d.isEnd()) {
              return true;
            }
          }
        } else {
          return dict.keys.get(word[0]).isEnd();
        }
      }
      if (word[0] === ".") {
        for (let d of dict.keys.values()) {
          if (searchImpl(d, word.slice(1))) {
            return true;
          }
        }
      } else {
        return searchImpl(dict.keys.get(word[0]), word.slice(1));
      }
    }
    return false;
  }
  const result = searchImpl(this.root, word);

  return result;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
const w = new WordDictionary();
const addWord = w.addWord.bind(w);
const search = w.search.bind(w);
addWord("bad");
addWord("dad");
addWord("mad");
search("pad");
search("bad");
search(".ad");
search("b..");
