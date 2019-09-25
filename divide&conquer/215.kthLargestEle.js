function find(nums, k) {
  function divide(nums, start, end) {
    if (start === end) {
      return [nums[start]];
    } else if (start < end) {
      const mid = ((start + end) / 2) | 0;
      const left = divide(nums, start, mid);
      const right = divide(nums, mid + 1, end);
      return merge(left, right);
    } else {
      return [];
    }
  }
  function merge(left, right) {
    const result = [];
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      result.push(left[i++]);
    }
    while (j < right.length) {
      result.push(right[j++]);
    }
    return result;
  }
  return divide(nums, 0, nums.length - 1)[k - 1];
}

//quickSort has less space complexity than merge sort.
function findQuickSort(nums, k) {
  function quickSort(nums, start, end) {
    if (start < end) {
      const p = partition(nums, start, end);
      quickSort(nums, start, p - 1);
      quickSort(nums, p + 1, end);
    }
  }
  function partition(nums, start, end) {
    const pivot = nums[start];
    let i = end + 1;
    for (let j = end; j >= start + 1; j--) {
      if (nums[j] < pivot) {
        i--;
        swap(nums, i, j);
      }
    }
    swap(nums, start, i - 1);
    return i - 1;
  }
  function swap(nums, a, b) {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
  quickSort(nums, 0, nums.length - 1);
  return nums[k - 1];
}

console.log(find([3, 2, 1, 5, 6, 4], 1), findQuickSort([3, 2, 1, 5, 6, 4], 1));
