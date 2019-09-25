function findPaths(matrix) {
  let count = 0;
  const final = [matrix[0].length - 1, matrix.length - 1];
  const paths = [];
  function search(point, record) {
    const [x, y] = point;
    if (x >= matrix[0].length || y >= matrix.length) {
      return;
    }
    if (matrix[y][x] === 1) return;
    if (x === final[0] && y === final[1]) {
      count++;
      paths.push(record);
      return;
    }
    search([x + 1, y], `${record}->right`);
    search([x, y + 1], `${record}->down`);
  }
  search([0, 0], "begin");
  console.log(paths)
  return count;
}

console.log(findPaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
