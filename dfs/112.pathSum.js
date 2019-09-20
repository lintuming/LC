function dfs(tree, target) {
  let result = false;
  function search(current, sum) {
    if (result) return;
    const value = tree[current];
    if (!value) {
      if (sum === target) {
        result = true;
      }
      return;
    }
    const left = current * 2 + 1,
      right = current * 2 + 2;
    search(left, sum + value);
    search(right, sum + value);
  }
  search(0, 0);
  return result;
}

console.log(
  dfs([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1], 26)
);
