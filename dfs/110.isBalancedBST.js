function isBalancedBST(tree) {
  function getHeight(current) {
    if (!tree[current]) return 0;
    return Math.max(getHeight(2 * current + 1), getHeight(2 * current + 2)) + 1;
  }
  const isBalancedBSTImpl = current => {
    if (!tree[current]) return true;
    const left = 2 * current + 1,
      right = 2 * current + 2;
    if (Math.abs(getHeight(left) - getHeight(right)) > 1) {
      return false;
    }
    return isBalancedBSTImpl(left) && isBalancedBSTImpl(right);
  };
  return isBalancedBSTImpl(0);
}

console.log(isBalancedBST([1,2,2,3,3,null,null,4,4]))