function twoSum2(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (nums[left] + nums[right] !== target) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [left, right];
}
