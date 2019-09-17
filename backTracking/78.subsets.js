
function solution(input) {
  const result = [];
  const backTrack = (buffer, remaining) => {
    result.push(buffer.slice());
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
