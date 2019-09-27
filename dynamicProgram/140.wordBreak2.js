function wordBreak2(str, dict) {
  const result = [];
  const stack = [];
  const map = {};
  function find(str) {
    if (str.length === 0) {
      return result.push(stack.join(" "));
    }
    for (let i = 0; i < str.length; i++) {
      const segment = str.slice(0, i + 1);
      if (map[segment]) {
        stack.push(segment);
        find(str.slice(i + 1));
        stack.pop();
      } else {
        inner: for (let j = 0; j < dict.length; j++) {
          const dictWord = dict[j];
          if (dictWord === segment) {
            map[segment] = true;
            stack.push(segment);
            find(str.slice(i + 1));
            stack.pop();
            break inner;
          }
        }
      }
    }
  }
  find(str);
  return result;
}

console.log(
  wordBreak2("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple"
  ])
);
