function Node(val) {
  this.value = val;
  this.next = null;
}

function flatten(tree) {
  let previousNode = null;
  let head = null;
  function search(current) {
    if (!tree[current]) {
      return;
    }
    const currentNode = new Node(tree[current]);
    if (!previousNode) {
      head = currentNode;
    }
    if (previousNode) {
      previousNode.next = currentNode;
    }
    previousNode = currentNode;
    search(2 * current + 1);
    search(2 * current + 2);
  }
  search(0)
  return head;
}

/**   
    1
   / \
  2   5
 / \   \
3   4   6
 */
console.log(flatten([1, 2, 5, 3, 4, null, 6]));
