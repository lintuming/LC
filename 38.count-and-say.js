/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number}
 * @return {string}
 */

var countAndSay = function(n) {
  let sequence = "1";
  function generateNextSequence(sequence) {
    let nextSequence = "";
    for (let j = 0; j < sequence.length; j++) {
      let i = 1;
      while (sequence[j] === sequence[j + 1]) {
        i++;
        j++;
      }
      nextSequence += i + "" + sequence[j];
    }
    return nextSequence;
  }
  for (let i = 1; i < n; i++) {
    sequence = generateNextSequence(sequence);
  }
  return sequence;
};
// @lc code=end
