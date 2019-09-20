function dfs(tree) {
  let minDepth = Number.MAX_VALUE;
  function search(current, prevDepth) {

    if (prevDepth >= minDepth) return;
    if (!tree[current]) {
      return (minDepth = Math.min(minDepth, prevDepth));
    }
    const left = current * 2 + 1,
      right = current * 2 + 2;
    search(left, prevDepth + 1);
    search(right, prevDepth + 1);
  }
  search(0, 0);
  return minDepth;
}
console.log(dfs([3,9,20,15,12,15,7]))