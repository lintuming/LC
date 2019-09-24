class BSTIterator {
  constructor(root) {
    this.root = root;
    this.stack = [];
  }
  next() {
    while (this.root) {
      this.stack.push(this.root);
      this.root = this.root.left;
    }
    this.root = this.stack.pop();
    const result = this.root.value;
    this.root = this.root.right;
    console.log(result);
    return result;
  }
  hasNext() {
    console.log(!!this.root || !!this.stack.length);
    return !!this.root || !!this.stack.length;
  }
}

function constructBST(list = []) {
  function construct(currentIdx) {
    if (!list[currentIdx]) {
      return null;
    }
    const node = { value: list[currentIdx] };
    node.left = construct(currentIdx * 2 + 1);
    node.right = construct(currentIdx * 2 + 2);
    return node;
  }
  return construct(0);
}

const iterator = new BSTIterator(constructBST([7, 3, 15, null, null, 9, 20]));
iterator.next(); // return 3
iterator.next(); // return 7
iterator.hasNext(); // return true
iterator.next(); // return 9
iterator.hasNext(); // return true
iterator.next(); // return 15
iterator.hasNext(); // return true
iterator.next(); // return 20
iterator.hasNext(); // return false
