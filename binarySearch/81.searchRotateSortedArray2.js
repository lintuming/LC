/**
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
solution([2,5,6,0,0,1,2],2)
 */
function solution(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      return true;
    }

    //left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    //right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
}
solution([2, 5, 6, 0, 0, 1, 2], 2);
