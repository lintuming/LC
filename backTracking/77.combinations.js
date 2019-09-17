function solution(n, k) {
  const result = [];
  const backTrack = (buffer, remaining) => {
    if (buffer.length === k) {
      return result.push(buffer.slice());
    }
    for (let i = 0; i < remaining.length; i++) {
      buffer.push(remaining[i]);
      backTrack(buffer, remaining.slice(i + 1));
      buffer.pop();
    }
  };
  backTrack(
    [],
    Array(n)
      .fill()
      .map((_, i) => i + 1)
  );
  return result;
}
