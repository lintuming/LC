
function bfs(tree) {
  const result = [];
  function search(currentNode, level) {
    if (!tree[currentNode]) return;
    result[level] = tree[currentNode];
    const left = currentNode * 2 + 1,
      right = currentNode * 2 + 2;
    search(left, level + 1);
    search(right, level + 1);
  }
  search(0, 0);
  return result;
};

console.log(bfs([1,2,3,null,5,null,4]))//1,3,4