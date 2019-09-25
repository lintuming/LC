function findPaths(m, n) {
  let count = 0;
  const final = [m - 1, n - 1];
  function find(point) {
    const [x, y] = point;
    if (x >= m || y >= n) return;
    if (x === final[0] && y === final[1]) {
      count++;
      return;
    }
    find([x + 1, y]);
    find([x, y + 1]);
  }
  find([0,0])
  return count
}


console.log(findPaths(7,3))