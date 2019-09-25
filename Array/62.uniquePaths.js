function findPaths(m, n) {
  let count = 0;
  const final = [m - 1, n - 1];
  const paths = [];
  function find(point, record) {
    const [x, y] = point;
    if (x >= m || y >= n) return;
    if (x === final[0] && y === final[1]) {
      count++;
      paths.push(record);
      return;
    }
    find([x + 1, y], `${record} -> right`);
    find([x, y + 1], `${record} -> down`);
  }
  find([0, 0], "begin");
  console.log(paths);
  return count;
}

findPaths(7, 3);
