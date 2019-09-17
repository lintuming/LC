function CombinationSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  const result = [];
  const buffer = [];
  search(0, target);
  function search(startIdx, target) {
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === arr.length) return;
    buffer.push(arr[startIdx]);
    search(startIdx, target - arr[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
  return result;
}

CombinationSum([2, 3, 6, 7], 7);
