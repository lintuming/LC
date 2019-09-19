//1
function bfs(tree) {
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
  return orderLevel.reverse();
}


console.log(bfs([3, 9, 20, null, null, 15, 7]));
