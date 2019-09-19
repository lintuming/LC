function bfs(islands) {
  let count = 0;
  for (let i = 0; i < islands[0].length; i++) {
    for (let j = 0; j < islands.length; j++) {
      if (islands[j][i] === 1) {
        count++;
        countIsland(islands, i, j);
      }
    }
  }
  return count;
}

function countIsland(islands, x, y) {
  if (islands[y][x]) {
    islands[y][x] = 0;
  }
  //top                              
  if (y - 1 >= 0 && islands[y - 1][x] === 1) {
    countIsland(islands, x, y - 1);
  }
  //right
  if (x + 1 < islands[0].length && islands[y][x + 1] === 1) {
    countIsland(islands,x + 1, y);
  }
  //bottom
  if (y + 1 < islands.length && islands[y + 1][x] === 1) {
    countIsland(islands,x, y + 1);
  }
  //left
  if (x - 1 >= 0 && islands[y][x - 1] === 1) {
    countIsland(islands,x - 1, y);
  }
}

console.log(
  bfs([
    [1, 1, 1, 1, 0], 
    [1, 1, 0, 0, 1], 
    [1, 1, 0, 0, 0], 
    [0, 0, 1, 0, 1]])
);
