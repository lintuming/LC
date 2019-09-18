function solution(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left];
}
