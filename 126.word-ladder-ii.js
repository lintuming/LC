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
  const cache = {};
  const A_CODE = "a".charCodeAt(0);
  let shortest = Number.MAX_VALUE;
  function canTransform(from, to) {
    if (from === to) return false;
    if (cache[from] && cache[from].includes(to)) return true;
    const length = from.length;
    for (let i = 0; i < length; i++) {
      if (
        `${from.slice(0, i)}${from.slice(i + 1)}` ===
        `${to.slice(0, i)}${to.slice(i + 1)}`
      ) {
        (cache[from] || (cache[from] = [])).push(to);
        return true;
      }
    }
    return false;
  }
  function backTrack(lastTransformed) {
    if (lastTransformed === endWord) {
      buffer.push(lastTransformed);
      shortest = Math.min(buffer.length, shortest);
      result.push(buffer.slice());
      buffer.pop();
      return;
    }
    if (buffer.length > shortest) return;
    buffer.push(lastTransformed);
    for (let i = 0; i < lastTransformed.length; i++) {
      for (let j = 0; j < 26; j++) {
        const letter = String.fromCharCode(A_CODE + j);
        const transformed = `${lastTransformed.slice(
          0,
          i
        )}${letter}${lastTransformed.slice(i + 1)}`;
        if (wordList.includes(transformed) && !buffer.includes(transformed)) {
          backTrack(transformed);
        }
      }
    }
    buffer.pop();
  }
  backTrack(beginWord);
  return result.filter(res => res.length === shortest);
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
