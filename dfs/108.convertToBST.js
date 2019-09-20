function convert(nums) {
  const tree = [];
  const emptyMarks = [];
  const converImpl = (nums, index) => {
    if (nums.length === 0) {
      emptyMarks.push(index);
      return;
    }
    const mid = (nums.length / 2) | 0;
    tree[index] = nums[mid];
    //push left
    converImpl(nums.slice(0, mid), 2 * index + 1);
    converImpl(nums.slice(mid + 1), 2 * index + 2);
  };
  converImpl(nums, 0, 0);
  //use array represent a tree will cause some empty node in array
  console.log(emptyMarks)
  while (emptyMarks.length) {
    const i = emptyMarks.shift();
    if (i < tree.length) {
      tree[i] = null;
    }
  }
  return tree;
}

/**
 *
 *            9
 *          /   \
 *        7      15
 *       /        \
 *      3          20
 */
console.log(convert([3, 7, 9, 15, 20]));
