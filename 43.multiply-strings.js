/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const result = [];

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      const multiple = num1[num1.length - 1 - i] * num2[num2.length - 1 - j];
      if (result[i + j]!=null) {
        result[i + j] += multiple;
      } else {
        result[i + j] = multiple;
      }
    }
  }
  for (let m = 0; m < result.length - 1; m++) {

    result[m + 1] += (result[m] / 10) | 0;
    result[m] = result[m] % 10;
  }
  return result.reverse().join('')
  // if (num1 === "0" || num2 === "0") {
  //   return "0";
  // } else if (num1 === "1") {
  //   return num2;
  // } else if (num2 === "1") {
  //   return num1;
  // }
  // let result = [];
  // const dot1Idx = num1.indexOf(".");
  // const dot2Idx = num2.indexOf(".");
  // let dotCount = 0;
  // if (~dot1Idx) {
  //   dotCount += num1.length - 1 - dot1Idx;
  //   num1 = num1.replace(".", "");
  // }

  // if (~dot2Idx) {
  //   dotCount += num2.length - 1 - dot2Idx;
  //   num2 = num2.replace(".", "");
  // }
  // for (let i = 0; i < num1.length; i++) {
  //   const li = num1.length - 1 - i;
  //   for (let j = 0; j < num2.length; j++) {
  //     const m = num1[i] * num2[j];
  //     const lj = num2.length - 1 - j;
  //     if (result[li + lj]) {
  //       result[li + lj] += m;
  //     } else {
  //       result[li + lj] = m;
  //     }
  //   }
  // }
  // for (let i = 0; i < result.length; i++) {
  //   if (result[i] >= 0) {
  //     if (result[i] >= 10) {
  //       const l = ~~(result[i] / 10);
  //       result[i + 1] = result[i + 1] ? result[i + 1] + l : l;
  //       result[i] = result[i] % 10;
  //     }
  //   } else {
  //     result[i] = 0;
  //   }
  // }
  // if (dotCount > 0) {
  //   result.splice(dotCount, 0, ".");
  // }
  // result = result.reverse();
  // return result.join("");
};
// @lc code=end
console.log(multiply("9", "9"));
