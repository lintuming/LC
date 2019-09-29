//may contain negative value
function largestSubarray(nums) {
  let maxValue = Number.MIN_VALUE;

  function findMax(nums) {
    if (nums.length === 0) {
      return;
    }
    let prev = 1;
    for (let i = 0; i < nums.length; i++) {
      const v = nums[i];
      maxValue = Math.max(maxValue, prev * v);
      prev = prev * v;
    }
    findMax(nums.slice(1));
  }
  findMax(nums);
  return maxValue === Number.MIN_VALUE ? 0 : maxValue;
}

console.log(largestSubarray([2, -1, -4, 2 ,- 3]));
