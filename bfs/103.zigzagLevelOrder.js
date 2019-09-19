function bfs(tree) {
  const orderLevel = [];
  const level = 0;
  const root = 0;
  search(root, level, -1);
  function search(currentNode, level, direction) {
    if (!tree[currentNode]) return;

    (orderLevel[level] || (orderLevel[level] = [])).push(tree[currentNode]);

    const leftNode = 2 * currentNode + 1,
      rightNode = 2 * currentNode + 2;
    const leftFirst = direction === 1;
    search(leftFirst ? leftNode : rightNode, level + 1, -1 * direction);
    search(leftFirst ? rightNode : leftNode, level + 1, -1 * direction);
  }
  return orderLevel;
}
console.log(bfs([3, 9, 20, 5, 20, 15, 7]));
