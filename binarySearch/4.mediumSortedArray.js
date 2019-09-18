function solution(a, b) {
  const temp = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      temp.push(a[i++]);
    } else {
      temp.push(b[j++]);
    }
  }
  while (i < a.length) {
    temp.push(a[i++]);
  }
  while (j < b.length) {
    temp.push(b[j++]);
  }
  const mid = temp.length / 2;
  if (temp.length % 2 === 0) {
    return (temp[mid - 1] + tem[mid]) / 2;
  }
  return temp[mid | 0];
}
