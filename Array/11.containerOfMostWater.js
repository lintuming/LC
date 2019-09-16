
function solution(arr) {
  let l = 0;
  let r = arr.length - 1;
  let area = 0;
  while (l < r) {
    const lv = arr[l];
    const rv = arr[v];
    area = Math.max(area, Math.min(lv, rv) * (r - l));
    if (lv < rv) {
      l++;
    } else {
      r--;
    }
  }
  return area;
}
