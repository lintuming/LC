//less than O(n**2) complexity
function findLongest(nums) {
  const lis = [];
  for (let i = 0; i < nums.length; i++) {
    lis[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }
  return Math.max(...lis);
}

console.log(findLongest([10,9,2,5,3,7,101,18]))