function solution(input) {
  const result = [];
  const cache = {};
  const backTrack = (buffer, remaining) => {
    if (remaining.length === 0) {
      const output = buffer.slice();
      const toStr = output.join("");
      if (cache[toStr]) return;
      cache[output.join("")] = true;
      return result.push(output);
    }
    for (let i = 0; i < remaining.length; i++) {
      buffer.push(remaining[i]);
      backTrack(buffer, remaining.slice(0, i).concat(remaining.slice(i + 1)));
      buffer.pop();
    }
  };
  backTrack([], input);
  return result;
}
