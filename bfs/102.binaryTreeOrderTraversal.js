function dfs(tree) {
  const orderLevel = [];
  const level = 0;
  const root = 0;
  search(root, level);
  function search(currentNode, level) {
    if (!tree[currentNode]) return;

    (orderLevel[level] || (orderLevel[level] = [])).push(tree[currentNode]);

    const leftNode = 2 * currentNode + 1,
      rightNode = 2 * currentNode + 2;
    search(leftNode, level + 1);
    search(rightNode, level + 1);
  }
  return orderLevel;
}

function bfs(tree) {
  const stack = [{ level: 0, node: 0 }];
  const orderLevel = [];
  while (stack.length) {
    const current = stack.shift(),
      nextLevel = current.level + 1,
      left = current.node * 2 + 1,
      right = current.node * 2 + 2;
    if (tree[left]) {
      stack.push({ node: left, level: nextLevel });
    }
    if (tree[right]) {
      stack.push({ node: right, level: nextLevel });
    }
    (orderLevel[current.level] || (orderLevel[current.level] = [])).push(
      tree[current.node]
    );
  }
  return orderLevel;
}

console.log(bfs([1, 2, 2, 3, null,4,5]));
