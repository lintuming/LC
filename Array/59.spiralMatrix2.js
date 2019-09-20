/**
Input: 5
Output:
[
 [ 1, 2, 3 , 4 , 5],
 [ 6, 7, 8 , 9 , 6],
 [ 5, 5, 6 , 1 , 7]
 [ 4, 4, 3 , 2 , 8],
 [ 3, 2, 1 , 0 , 9],
]
 */

function solution(int) {
  if (int === 0) return [];
  if (int === 1) return [[1]];
  const result = [];
  for (let i = 0; i <= int - 1; i++) {
    result.push([]);
  }
  let num = 1;
  let x = 0,
    xEnd = int - 1,
    y = 0,
    yEnd = int - 1;
  while (x <= xEnd && y <= yEnd) {
    for (let i = x; i <= xEnd; i++) {
      result[y][i] = num++;
    }
    y++;
    for (let i = y; i <= yEnd; i++) {
      result[i][xEnd] = num++;
    }
    xEnd--;
    for (let i = xEnd; i >= x; i--) {
      result[yEnd][i] = num++;
    }
    yEnd--;
    for (let i = yEnd; i >= y; i--) {
      result[i][x] = num++;
    }
    x++;
  }
  return result;
}
