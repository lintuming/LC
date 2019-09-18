function solution(nums, target) {
  if (nums.length === 0) return [-1, -1];
  let left = 0,
    right = nums.length - 1,
    finded = -1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      finded = mid;
      break;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (finded === -1) return [-1, -1];
  let first = finded,
    last = finded;
  while (first > 0 && nums[first] === nums[first - 1]) {
    first--;
  }
  while (nums[last] === nums[last + 1]) {
    last++;
  }
  return [first, last];
}
