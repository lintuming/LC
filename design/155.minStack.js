class MinStack {
  constructor() {
    this.stack = [];
    this.head = this.tail = null;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }
  pop() {
    const val = this.stack.pop();
    let node = this.head,
      prev = null;
    while (node.value !== val) {
      prev = node;
      node = node.next;
    }
    if (!prev) {
      this.head = node.next;
      this.tail.next = this.head;
    } else {
      prev.next = node.next;
    }
    if (node === this.tail) {
      this.tail = prev;
      this.tail.next = this.head;
    }
    node.next = null;
  }
  push(val) {
    const node = { next: null, value: val };
    this.stack.push(val);
    if (!this.head) {
      this.head = this.tail = node;
    }
    if (val <= this.head.value) {
      node.next = this.head;
      this.head = node;
      this.tail.next = this.head;
      return;
    }
    if (val >= this.tail.value) {
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
      return;
    }
    let next = this.head.next,
      prev = this.head;
    while (next !== this.head) {
      if (val < next.value) {
        prev.next = node;
        node.next = next;
        break;
      }
      prev = next;
      next = next.next;
    }
  }
  getMin() {
    return this.head.value;
  }
}

class MinStack2 {
  constructor() {
    this.mins = [];
    this.stack = [];
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  push(val) {
    this.stack.push(val);
    if (this.mins.length || val < this.mins[this.mins.length - 1]) {
      this.mins.push(val);
    }
  }
  pop() {
    const v = this.stack.pop();
    if (v === this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }
  }
  getMin() {
    return this.mins[this.mins.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
