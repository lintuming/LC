/*
 * @lc app=leetcode id=407 lang=javascript
 *
 * [407] Trapping Rain Water II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
function Cell(x, y, height) {
  this.x = x;
  this.y = y;
  this.height = height;
}
var trapRainWater = function(heightMap) {
  let water = 0;
  const visited = Array.from({ length: heightMap.length }, () => []);
  const m = heightMap.length - 1,
    n = heightMap[0].length - 1;
  const priorityQueue = [];
  function offer(cell) {
    if (priorityQueue.length === 0) {
      priorityQueue.push(cell);
    } else {
      let i = 0;
      while (cell.height > priorityQueue[i]) {
        i++;
      }
      priorityQueue.splice(i, 0, cell);
    }
  }
  function pull() {
    return priorityQueue.shift();
  }
  for (let i = 0; i <= m; i++) {
    const y = i;
    offer(new Cell(0, y, heightMap[y][0]));
    offer(new Cell(n, y, heightMap[y][n]));
    visited[y][0] = 1;
    visited[y][n] = 1;
  }
  for (let j = 0; j <= n; j++) {
    const x = j;
    offer(new Cell(x, 0, heightMap[0][x]));
    offer(new Cell(x, m, heightMap[m][x]));
    visited[0][x] = 1;
    visited[m][x] = 1;
  }
  const dirX = [0, 0, -1, 1];
  const dirY = [-1, 1, 0, 0];
  while (priorityQueue.length) {
    const current = pull();
    for (let i = 0; i < 4; i++) {
      const x = current.x + dirX[i];
      const y = current.y + dirY[i];
      if (x >= 0 && y >= 0 && x <= n && y <= m && !visited[y][x]) {
        offer(new Cell(x, y, Math.max(current.height, heightMap[y][x])));
        visited[y][x] = 1;
        water+=Math.max(0,current.height-heightMap[y][x])
      }
    }
  }
  return water
};
// @lc code=end

