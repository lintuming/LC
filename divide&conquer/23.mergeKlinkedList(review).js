function mergeLinkedList(list) {
  let left = 0,
    right = list.length - 1;
  return toArray(divide(list, left, right));
}

function divide(lists, start, end) {
  if (start === end) {
    return lists[start];
  } else if (start < end) {
    const mid = ((start + end) / 2) | 0;
    const left = divide(lists, start, mid);
    const right = divide(lists, mid + 1, end);
    return merge(left, right);
  } else {
    return null;
  }
}

function merge(left, right) {
  if (!left) return right;
  if (!right) return left;
  if (left.value <= right.value) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(right.next, left);
    return right;
  }
}

const linked = arr => {
  let prev = null,
    first = null;
  while (arr.length) {
    const node = { next: null, value: arr.shift() };
    if (prev) {
      prev.next = node;
    } else {
      first = node;
    }
    prev = node;
  }
  return first;
};
function toArray(root) {
  const result = [];
  while (root) {
    result.push(root.value);
    root = root.next;
  }
  return result
}
console.log(
  mergeLinkedList([
    linked([1, 4, 5]),
    linked([2, 3, 4]),
    linked([5, 7, 9])
  ])
);
