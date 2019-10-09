function isMatch(str, pattern) {
  const sL = str.length;
  const pL = pattern.length;
  function check(i, j) {
    if (i > sL) return false;
    if (i === sL && j === pL) return true;
    const p = pattern[j];
    if (str[i] === p || p === "?") {
      return check(i + 1, j + 1);
    } else {
      return p === "*" ? check(i, j + 1) || check(i + 1, j) : false;
    }
  }
  return check(0,0)
}


console.log(isMatch("adceb","*a*b"))