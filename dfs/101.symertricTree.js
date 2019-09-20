
function dfs(tree) {
  return search(tree, 1, 2);
}

function search(tree, a, b) {
  if (!tree[a] && !tree[b]) {
    return true;
  }
  if (!tree[a] || !tree[b]) {
    return false;
  }
  return (
    tree[a] === tree[b] &&
    search(tree, 2 * a + 1, 2 * b + 2) &&
    search(tree, 2 * a + 2, 2 * b + 1)
  );
}

console.log(dfs([1,2,2,null,3,null,3]));
