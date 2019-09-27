function wordBreak(str, dict) {
  const map = {};
  let result = false;
  function find(str) {
    if (str.length === 0) {
      return (result = true);
    }
    for (let i = 0; i < str.length; i++) {
      if (result) {
        break;
      }
      const segment = str.slice(0, i + 1);
      if (map[segment]) {
        find(str.slice(i + 1));
      }
      for (let j = 0; j < dict.length; j++) {
        const dictWord = dict[j];
        if (dictWord === segment) {
          map[segment] = true;
          find(str.slice(i + 1));
        }
      }
    }
  }
  find(str);
  return result;
}

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
