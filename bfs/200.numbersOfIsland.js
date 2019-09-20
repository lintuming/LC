

function bfs(islands) {
  let count = 0;
  for (let i = 0; i < islands[0].length; i++) {
    for (let j = 0; j < islands.length; j++) {
      if (islands[j][i] === 1) {
        count++;
        search(islands, i, j);
      }
    }
  }
  function search(islands, x, y) {
    const stack = [{ x, y }];
    while (stack.length) {
      const { x, y } = stack.shift();
      islands[y][x] = 0;
      if (y - 1 >= 0 && islands[y - 1][x] === 1) {
        stack.push({ x, y: y - 1 });
      }
      if (x - 1 >= 0 && islands[y][x - 1] === 1) {
        stack.push({ x: x - 1, y });
      }
      if (y + 1 < islands.length && islands[y + 1][x] === 1) {
        stack.push({ x, y: y + 1 });
      }
      if (x + 1 < islands[0].length && islands[y][x + 1] === 1) {
        stack.push({ x: x + 1, y });
      }
    }
  }
  return count;
}
console.log(
  bfs([
    [1, 1, 1, 1, 1], 
    [1, 1, 0, 0, 1], 
    [1, 1, 0, 0, 1], 
    [0, 0, 1, 0, 1]])
);