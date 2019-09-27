function distinctSubsequences(s1, s2) {
  let result = 0;
  function isDistinct(s1, s2) {
    if (!s2.length || !s1.length) {
      return;
    }
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[0]) {
        isDistinct(s1.slice(i + 1), s2.slice(1));
      }
      if (s2.length === 1 && s1[i] === s2) {
        result++;
      }
    }
  }
  isDistinct(s1, s2);
  return result;
}

console.log(distinctSubsequences("babgbag", "bag"));
