function isMatch(s, p) {
  var lenS = s.length;
  var lenP = p.length;
  var map = {};

  return check(0, 0);

  function check(idxS, idxP) {
    if (map[idxS + ":" + idxP] !== undefined) return map[idxS + ":" + idxP];
    if (idxS > lenS) return false;
    if (idxS === lenS && idxP === lenP) return true;

    if (p[idxP] === "." || p[idxP] === s[idxS]) {
      map[idxS + ":" + idxP] =
        p[idxP + 1] === "*"
          ? check(idxS + 1, idxP) || check(idxS, idxP + 2)
          : check(idxS + 1, idxP + 1);
    } else {
      map[idxS + ":" + idxP] =
        p[idxP + 1] === "*" ? check(idxS, idxP + 2) : false;
    }
    return map[idxS + ":" + idxP];
  }
}

function match(str, pattern) {
  const sLen = str.length;
  const pLen = pattern.length;
  function check(sIdx, pIdx) {
    if (sIdx > sLen) return false;
    if (sIdx === sLen && pIdx === pLen) return true;
    const p = pattern[pIdx];

    if (str[sIdx] === p || p === ".") {
      return pattern[pIdx + 1] === "*"
        ? check(sIdx + 1, pIdx) || check(sIdx, pIdx + 2)
        : check(sIdx + 1, pIdx + 1);
    } else {
      return pattern[pIdx + 1] === "*" ? check(sIdx, pIdx + 2) : false;
    }
  }
  return check(0, 0);
}

console.log(match("aabbbcd", "a*a*b*cd"), isMatch("aabbb", "a*a*b*"));
