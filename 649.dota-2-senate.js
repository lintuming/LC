/*
 * @lc app=leetcode id=649 lang=javascript
 *
 * [649] Dota2 Senate
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  let dire = 0,
    radiant = 0;
  const R = "Radiant",
    D = "Dire";
  for (let i = 0; i < senate.length; i++) {
    senate[i] === "R" ? radiant++ : dire++;
  }
  if (dire === 0) return R;
  if (radiant === 0) return D;
  senate = senate.split("");
  const l = senate.length;
  while (dire !== 0 && radiant !== 0) {
    for (let i = 0; i < senate.length; i++) {
      if (senate[i] === "R") {
        for (let j = i + 1; j < i + 1 + l; j++) {
          if (senate[j % l] === "D") {
            senate[j % l] = "B";
            dire--;
            break;
          }
        }
      } else if (senate[i] === "D") {
        for (let j = i + 1; j < i + 1 + l; j++) {
          if (senate[j % l] === "R") {
            senate[j % l] = "B";
            radiant--;
            break;
          }
        }
      }
    }
  }
  return dire >= 1 ? D : R;
};
// @lc code=end
console.log(predictPartyVictory("RDD"));
// 3  4 5 6 7
