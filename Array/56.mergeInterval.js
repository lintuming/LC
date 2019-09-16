/**
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */
function solution(collect) {
  for (let i = 0; i < collect.length; i++) {
    const [a, b] = collect[i];
    if (collect[i + 1]) {
      const [c, d] = collect[i + 1];
      if (c >= a && c <= b) {
        collect[i] = [a, d];
        collect.splice(i + 1, 1);
        i = i - 1;
      }
    }
  }
  return collect;
}

