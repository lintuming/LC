function solution(arr, target) {
  arr = arr.sort((a, b) => a - b);
  const buffer = [];
  const result = [];
  console.log(arr);
  search(0, target);
  function search(startIdx, target) {
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === arr.length) return;
    buffer.push(arr[startIdx]);
    search(startIdx + 1, target - arr[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
  return result;
}

solution([10, 1, 2, 7, 6, 1, 5], 8);
