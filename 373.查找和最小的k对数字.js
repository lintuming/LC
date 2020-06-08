/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MaxHeap(k);
  for (let i = 0; i < nums1.length; i++) {
    inner: for (let j = 0; j < nums2.length; j++) {
      const item = {
        val: nums1[i] + nums2[j],
        pair: [nums1[i], nums2[j]],
      };
      if (minHeap.container.length < k) {
        minHeap.add(item);
      } else if (item.val < minHeap.peak().val) {
        minHeap.poll();
        minHeap.add(item);
      } else {
        break inner;
      }
    }
  }
  return minHeap.container.map((item) => item.pair);
};

class MaxHeap {
  constructor(size) {
    this.container = [];
    this.size = size;
  }
  add(item) {
    this.container.push(item);
    this.heapifyUp();
  }
  peak() {
    return this.container[0];
  }
  poll() {
    if (this.container.length === 0) {
      return null;
    }

    if (this.container.length === 1) {
      return this.container.pop();
    }
    const top = this.container[0];
    this.container[0] = this.container.pop();
    this.heapifyDown();
    return top;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getByIndex(index) {
    return this.container[index];
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  heapifyUp() {
    let index = this.container.length - 1;
    let parent = null;
    while (
      (parent = this.getByIndex(this.getParentIndex(index))) &&
      !this.compare(parent, this.getByIndex(index))
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  heapifyDown() {
    let index = 0;
    let nextIndex = null;
    let right = null;
    let left = null;
    while ((left = this.getByIndex(this.getLeftIndex(index)))) {
      if (
        (right = this.getByIndex(this.getRightIndex(index))) &&
        this.compare(right, left)
      ) {
        nextIndex = this.getRightIndex(index);
      } else {
        nextIndex = this.getLeftIndex(index);
      }

      if (this.compare(this.getByIndex(index), this.getByIndex(nextIndex))) {
        break;
      }
      this.swap(index, nextIndex);
      index = nextIndex;
    }
  }
  swap(index1, index2) {
    [this.container[index1], this.container[index2]] = [
      this.container[index2],
      this.container[index1],
    ];
  }
  compare(item1, item2) {
    return item1.val >= item2.val;
  }
}

// @lc code=end
