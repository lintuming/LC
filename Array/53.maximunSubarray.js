/**
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

function solution(input) {
  let prev = 0;
  let max = -Math.MIN_VALUE;
  for (let i = 0; i < input.length; i++) {
    prev = Math.max(prev + [input[i]], input[i]);
    max = Math.max(prev, max);
  }
  return max
}
