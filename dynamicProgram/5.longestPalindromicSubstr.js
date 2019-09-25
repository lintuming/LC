function solution(str) {
  let max = "";
  for (let i = 0; i < str.length; i++) {
    //'baab' 'bab'
    for (let j = 0; j <= 1; j++) {
      let left = i,
        right = i + j;
      while (str[left] && str[left] === str[right]) {
        left--;
        right++;
      }
      if (right - 1 - left > max.length) {
        max = str.slice(left + 1, right);
      }
    }
  }
  return max
}


console.log(solution('bbacabbcd'))