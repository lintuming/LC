function solution(input) {
  const result = [];
  const cache = {};
  const backTrack = (buffer, remaining) => {
    const subset = buffer.slice();
    const toStr = subset.join("");
    if (!cache[toStr]) {
      cache[toStr] = true;
      result.push(buffer.slice());
    }
    if (remaining.length === 0) return;
    for (let i = 0; i < remaining.length; i++) {
      buffer.push(remaining[i]);
      backTrack(buffer, remaining.slice(i + 1));
      buffer.pop();
    }
  };
  backTrack([], input);
  return result;
}
