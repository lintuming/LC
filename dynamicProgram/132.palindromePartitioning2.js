function findMinCut(str) {
  let minCut = Number.MAX_VALUE;

  function findPalindrome(str, cutTime) {
    if (str === "") {
      return (minCut = Math.min(cutTime - 1, minCut));
    }
    if (cutTime > minCut) {
      return;
    }
    let max = Number.MIN_VALUE,
      next = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j <= 1; j++) {
        let k = i;
        let l = i + j;
        while (str[k] && str[k] === str[l]) {
          k--;
          l++;
        }
        //we find the max length palindrome strat from 0
        if (k === -1) {
          max = Math.max(l, max);
          next = str.slice(max);
        }
      }
    }
    if (max !== Number.MIN_VALUE) {
      findPalindrome(next, cutTime + 1);
    }
  }
  findPalindrome(str, 0);
  return minCut;
}

console.log(findMinCut("aacbbbd"));
