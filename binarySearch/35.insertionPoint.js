function solution(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      return mid;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
