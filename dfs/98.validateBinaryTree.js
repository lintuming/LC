function dfs(tree) {
  function search(index) {
    if (!tree[index]) return true;
    const left = index * 2 + 1,
      right = index * 2 + 2;
    if (tree[left] && tree[left] > tree[index]) return false;
    if (tree[right] && tree[right] < tree[index]) return false;
    return search(left, tree) && search(right, tree);
  }
  return search(0);
}

console.log(dfs([5, 1, 6, null, null, 3, 9]));

