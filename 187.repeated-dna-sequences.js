/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const output = [];
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    const subDna = s.slice(i, i + 10);
    if (set.has(subDna)&&!output.includes(subDna)) {
      output.push(subDna);
    } else {
      set.add(subDna);
    }
  }
  return output;
};
// @lc code=end
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
