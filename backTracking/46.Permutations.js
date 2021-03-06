
function solution(input) {
  const result = [];
  const backTrack = (buffer, remaining) => {
    if (remaining.length === 0) return result.push(buffer.slice());
    for (let i = 0; i < remaining.length; i++) {
      buffer.push(remaining[i]);
      backTrack(buffer, remaining.slice(0, i).concat(remaining.slice(i + 1)));
      buffer.pop();
    }
  };
  backTrack([],input)
  return result
}
