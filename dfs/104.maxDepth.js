function dfs(tree) {
  let depth = 0;

  function search(current, prevDepth) {
    depth = Math.max(depth, prevDepth + 1);
    const left = current * 2 + 1,
      right = current * 2 + 2;
    if (tree[left]) {
      search(left, prevDepth + 1);
    }
    if (tree[right]) {
      search(right, prevDepth + 1);
    }
  }
  search(0, depth);
  return depth;
}

console.log(dfs([3, 9, 20, 1, null, 15, 7, 4]));
