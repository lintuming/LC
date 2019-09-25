
function findMinPathSum(matrix) {
  let min = Number.MAX_VALUE;
  const final = [matrix[0].length - 1, matrix.length - 1];
  function search(point, sum=0) {
    const [x, y] = point;
    if (x >= matrix[0].length || y >= matrix.length) return;
    sum = sum + matrix[y][x];
    if (sum >= min) {
      return;
    }
    if (x === final[0] && y === final[1]) {
      min = Math.min(min, sum);
      return;
    }
    search([x + 1, y], sum);
    search([x, y + 1], sum);
  }
  search([0, 0]);
  return min;
}

console.log(findMinPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
