/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// var trap = function(height) {
//   let water = 0;
//   function findNextBlock(idx, h) {
//     let maxHeight = -Number.MAX_VALUE;
//     let maxBlocks = 0;
//     let maxIdx = 0;
//     let j = idx + 1;
//     let block = 0;
//     if (j >= height.length) {
//       return;
//     }
//     while (j < height.length) {
//       if (height[j] < h) {
//         if (height[j] > maxHeight) {
//           maxHeight = height[j];
//           maxBlocks = block;
//           maxIdx = j;
//         }
//         block += height[j];
//       } else {
//         if (j === idx + 1) {
//           return idx + 1;
//         } else {
//           maxHeight = height[j];
//           maxBlocks = block;
//           maxIdx = j;
//           break;
//         }
//       }
//       j++;
//     }
//     water += (maxIdx - idx - 1) * Math.min(height[idx], maxHeight) - maxBlocks;
//     return maxIdx;
//   }
//   for (let i = 0; i < height.length; i++) {
//     const h = height[i];
//     if (h === 0) continue;
//     const next = findNextBlock(i, h);
//     if (next) {
//       i = next - 1;
//     }
//   }

//   return water;
// };
//better
var trap = function(height) {
  let left = 0,
    right = height.length - 1;
  let res = 0;
  while (left < right) {
    const min = Math.min(height[left], height[right]);
    if (min === height[left]) {
      left++;
      while (left < right && height[left] < min) {
        res += min - height[left++];
      }
    } else {
      right--;
      while (left < right && height[right] < min) {
        res += min - height[right--];
      }
    }
  }
  return res;
};

// @lc code=end
console.log(trap([4, 2, 3]));
