function wildCardMatching(str, pattern) {
  const sL = str.length,
    pL = pattern.length;

  function check(s, p) {
    if (s === sL && p === pL) {
      return true;
    }
    if (s > sL || p > pL) {
      return false;
    }
    const m = pattern[p];
    const letter = str[s];
    if (letter === m || m === "?") {
      return check(s + 1, p + 1);
    } else {
      return m === "*" ? check(s, p + 1) || check(s + 1, p) : false;
    }
  }
  return check(0, 0);
}

console.log(wildCardMatching("adceb", "*"));
