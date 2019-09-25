function quickSearch(matrix, target) {
  if (matrix.length === 0) return false;
  let y = 0,
    x = matrix[0].length - 1;
  while (x >= 0 && y < matrix.length) {
    if (matrix[y][x] > target) {
      x--;
    } else if (matrix[y][x] === target) {
      return true;
    } else if (matrix[y][x] < target) {
      y++;
    }
  }
  return false;
}

console.log(
  quickSearch(
    [
      [ 1,  4,  7,  11, 15],
      [ 2,  5,  8,  12, 19],
      [ 3,  6,  9,  16, 22],
      [10, 13, 14,  17, 24],
      [18, 21, 23,  26, 30]
    ],
    20
  )
);
