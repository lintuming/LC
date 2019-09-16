/**
 Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

//1.
function solution(matrix) {
  let result = [];
  const r = matrix.length;
  const c = matrix[0].length;
  for (let x = 0, y = 0; x < r / 2 && y < c / 2; x++, y++) {
    const Xoffset = 2 * x;
    const Yoffset = 2 * y;
    result = result.concat(split(matrix, x, y, c - Xoffset, r - Yoffset));
  }
  return result;
}

function split(matrix, x, y, xl, yl) {
  const result = [];
  for (let i = x; i < x + xl; i++) {
    (result[0] || (result[0] = [])).push(matrix[y][i]);
    if (yl > 1) {
      (result[2] || (result[2] = [])).unshift(matrix[y + yl - 1][i]);
    }
  }
  for (let j = y + 1; j < y + yl - 1; j++) {
    (result[3] || (result[3] = [])).unshift(matrix[j][x]);
    (result[1] || (result[1] = [])).push(matrix[j][x + xl - 1]);
  }
  return result.flat();
}

//2.
function solution2(matrix) {
  const result = [];
  let x = 0,
    xEnd = matrix[0].length - 1,
    y = 0,
    yEnd = matrix.length - 1;
  while (x <= xEnd && y <= yEnd) {
    for (let i = x; i <= xEnd; i++) {
      result.push(matrix[y][i]);
    }
    y++;
    for (let i = y; i <= yEnd; i++) {
      result.push(matrix[i][xEnd]);
    }
    xEnd--;
    for (let i = xEnd; i >= x; i--) {
      result.push(matrix[yEnd][i]);
    }
    yEnd--;
    for (let i = yEnd; i >= y; i--) {
      result.push(matrix[i][x]);
    }
    x++;
    maxCount++;
  }
  return result;
}
