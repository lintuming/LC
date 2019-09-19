
//todo:reduce the Space Complexity
function bfs(tree) {
  let minDepth = 0;
  const stack = [{ level: 1, idx: 0 }];
  while (stack.length) {
    const c = stack.shift();
    const left = c.idx * 2 + 1,
      right = c.idx * 2 + 2;
    if (!tree[left] || !tree[right]) {
      minDepth = c.level;
      break;
    }
    const nextLevel = c.level + 1;
    stack.push(
      { level: nextLevel, idx: left },
      { level: nextLevel, idx: right }
    );
  }
  return minDepth;
}
console.log(bfs([3, 9, 20, 12, 12, 15, 7]));
