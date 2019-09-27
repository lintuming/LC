function minTriangle(triangle) {
  let min = Number.MAX_VALUE;
  const h = triangle.length;
  function traverse(row, j, sum) {
    if (sum > min) {
      return;
    }
    if (row >= triangle.length) {
      min = Math.min(min, sum);
      return;
    }
    const points = triangle[row];
    for (let i = j; i <= j + 1; i++) {
      if (points[i]) {
        const next = sum + points[i];
        traverse(row + 1, i, next);
      }
    }
  }
  traverse(0, 0, 0);
  return min;
}

console.log(minTriangle([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
