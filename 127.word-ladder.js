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
  var queue = [];
  var i = 0;
  queue.push(beginWord);
  function deleteWord(word) {
    const index = wordDict.findIndex(word => word === word);
    wordDict.splice(index, 1);
  }
  deleteWord(beginWord);
  if (oneCharDiff(beginWord, endWord) && wordDict.includes(endWord)) {
    return 2;
  } else {
    return bfs();
  }

  function bfs() {
    var depth = 1;
    while (queue.length > 0) {
      depth++;
      var count = queue.length;
      while (count--) {
        var curr = queue.shift();
        if (oneCharDiff(curr, endWord) && curr !== beginWord) {
          return depth;
        }
        for (var i = 0; i < curr.length; i++) {
          for (var j = "a".charCodeAt(); j <= "z".charCodeAt(); j++) {
            var testMatch = curr;
            var ch = String.fromCharCode(j);
            if (testMatch[i] !== ch) {
              testMatch = replaceChat(testMatch, i, ch);
            }
            if (wordDict.includes(testMatch)) {
              queue.push(testMatch);
              deleteWord(testMatch);
            }
          }
        }
      }
    }
    return 0;
  }
  function replaceChat(source, pos, newChar) {
    var sFrontPart = source.substr(0, pos);
    var sTailPart = source.substr(pos + 1, source.length);
    return sFrontPart + newChar + sTailPart;
  }
  function oneCharDiff(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    var count = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i].toLowerCase() !== b[i].toLowerCase()) {
        count++;
      }
      if (count >= 2) {
        return false;
      }
    }
    if (count === 1) {
      return true;
    } else {
      return false;
    }
  }
};
// @lc code=end
console.log(
  ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])
);
