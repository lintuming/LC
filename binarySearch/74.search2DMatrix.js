

/**
 * 
 */
function solution(matrix, target) {
  const len = matrix.length;
  let i = 0;
  while (target >= matrix[i][0]) {
    i++;
  }
  const t = i === 0 ? i : i - 1;
  let left = 0,
    right = matrix[0].length;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (target === matrix[t][mid]) {
      return true;
    }
    if (target < matrix[t][mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
