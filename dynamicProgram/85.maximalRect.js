function max(matrix) {
  let maxArea = 0;
  const n = matrix.length;
  if (n === 0) return 0;
  const m = matrix[0].length;
  const w = new Array(n).fill(0);

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (matrix[y][x] === "1") {
        w[y]++;
      } else {
        w[y] = 0;
      }
      for (let y = 0; y < n; y++) {
        let prev = y - 1;
        while (prev >= 0 && w[y] <= w[prev]) {
          prev--;
        }
        let next = y + 1;
        while (next < n && w[y] <= w[next]) {
          next++;
        }console.log(w)
        maxArea = Math.max(maxArea, w[y] * (next - prev - 1));
      }
    }
  }
  return maxArea;
}

console.log(
  max([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])
);
