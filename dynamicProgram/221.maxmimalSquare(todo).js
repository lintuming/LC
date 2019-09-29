function maxSquare(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const h = new Array(n).fill(0);
  let max = 0;
  for (x = 0; x < m; x++) {
    for (let j = 0; j < n; j++) {
      if (matrix[j][x] === 1) {
        h[j]++;
      } else {
        h[j] = 0;
      }
    }
    for (let j = 0; j < n; j++) {
      let prev = j - 1;
      while (prev >= 0 && h[j] <= h[prev]) {
        prev--;
      }
      let next = j + 1;
      while (next < n && h[j] <= h[next]) {
        next++;
      }
      let width = h[j],
        height = next - prev - 1;
      const edge = width > height ? height : width;
      max = Math.max(max, edge ** 2);
    }
  }
  return max;
}

console.log(
  maxSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1]
  ])
);
