/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
//2:abc 3:def 4:ghi 5:jkl 6:mno 7:pqrs 8:tuv  9:wxyz
var letterCombinations = function(digits) {
  
  const result = [];
  if(!digits)return result;
  const buffer = [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: "ghi".split(""),
    5: "jkl".split(""),
    6: "mno".split(""),
    7: "pqrs".split(""),
    8: "tuv".split(""),
    9: "wxyz".split("")
  };
  function backTrack(substr) {
    if (substr.length === 0) {
      return result.push(buffer.join(""));
    }
    const num = substr[0];
    if (map[num]) {
      const list = map[num];
      for (let j = 0; j < list.length; j++) {
        buffer.push(list[j]);
        backTrack(substr.slice(1));
        buffer.pop();
      }
    }
  }
  backTrack(digits);
  return result;
};
// @lc code=end
console.log(letterCombinations("23"));
