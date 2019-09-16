/**
Given input matrix =
[                                
  [ 5, 1, 9,11], 
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
function rotateImage(matrix) {
  const len = matrix.length;
  if (len === 0 || len === 1) return matrix;
  for (let x = 0; x < matrix.length / 2; x++) {
    for (let y = x; y < len - x - 1; y++) {
      const temp = matrix[x][y];
      matrix[x][y] = matrix[len - 1 - y][x];
      /**
       *  A[0][0] = A[x][y] = 1 len=4
       *  A[3(len-1-y)][x]->A[len-1-x][3]=11
       *
       *  A[0][1]=A[x][y]=2
       *  A[2(len-1-y)][x]->A[len-1-x][2(len-1-y)]=9
       */
      matrix[len - 1 - y][x] = matrix[len - 1 - x][len - 1 - y];
      /**
       * A[0][0] = A[x][y] = 1  len=4
       * A[3(len-1-x)][3(len-1-y)] -> A[0(y)][3(len-1-x)]=16
       *
       * A[0][1]=A[x][y]=2
       * A[3(len-1-x)][2(len-1-y)] -> A[1(y)][3(len-1-x)] =7
       */
      matrix[len - 1 - x][len - 1 - y] = matrix[y][len - 1 - x];
      /**
       * A[0][0] = A[x][y] = 1  len=4
       * A[0(y)][3(len-1-x)] ->A[0(x)][0(y)]
       *
       * A[0][1]=A[x][y]=2
       * A[1(y)][3(len-1-x)]->A[0(x)][1(y)] = 14
       */
      matrix[y][len - 1 - x] = temp;
    }
  }
  return matrix;
}
