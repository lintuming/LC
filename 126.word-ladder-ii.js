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
  const res = [];
  const dict = new Set(wordList);
  const paths = [[beginWord]];
  const A = "a".charCodeAt();
  const words = new Set();
  let level = 1,
    minLevel = Number.MAX_VALUE;
  while (paths.length) {
    const path = paths.shift();
    if (path.length > level) {
      words.forEach(word => {
        if (dict.has(word)) {
          dict.delete(word);
        }
      });
      level = path.length;
      if (level > minLevel) break;
    }
    const last = path[path.length - 1];
    for (let i = 0; i < last.length; i++) {
      for (let j = A; j <= A + 25; j++) {
        const newWord =
          last.slice(0, i) + String.fromCharCode(j) + last.slice(i + 1);
        if (!dict.has(newWord)) {
          continue;
        }
        words.add(newWord);
        const newPath = [...path, newWord];
        if (newWord === endWord) {
          res.push(newPath);
          minLevel = newPath.length;
        } else {
          paths.push(newPath);
        }
      }
    }
  }
  return res
};
// @lc code=end

console.log(
  findLadders("qa", "sq", [
    "si",
    "go",
    "se",
    "cm",
    "so",
    "ph",
    "mt",
    "db",
    "mb",
    "sb",
    "kr",
    "ln",
    "tm",
    "le",
    "av",
    "sm",
    "ar",
    "ci",
    "ca",
    "br",
    "ti",
    "ba",
    "to",
    "ra",
    "fa",
    "yo",
    "ow",
    "sn",
    "ya",
    "cr",
    "po",
    "fe",
    "ho",
    "ma",
    "re",
    "or",
    "rn",
    "au",
    "ur",
    "rh",
    "sr",
    "tc",
    "lt",
    "lo",
    "as",
    "fr",
    "nb",
    "yb",
    "if",
    "pb",
    "ge",
    "th",
    "pm",
    "rb",
    "sh",
    "co",
    "ga",
    "li",
    "ha",
    "hz",
    "no",
    "bi",
    "di",
    "hi",
    "qa",
    "pi",
    "os",
    "uh",
    "wm",
    "an",
    "me",
    "mo",
    "na",
    "la",
    "st",
    "er",
    "sc",
    "ne",
    "mn",
    "mi",
    "am",
    "ex",
    "pt",
    "io",
    "be",
    "fm",
    "ta",
    "tb",
    "ni",
    "mr",
    "pa",
    "he",
    "lr",
    "sq",
    "ye"
  ])
);
