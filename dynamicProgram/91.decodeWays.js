function getEN() {
  var arr = [];

  for (var i = 65; i < 91; i++) {
    arr.push(String.fromCharCode(i));
  }

  return arr;
}
function decodeWays(str) {
  const lettersMap = getEN();
  let ways = 0;
  (function find(str) {
    if (!str) {
      return ways++;
    }
    for (let i = 1; i <= str.length; i++) {
      const code = Number(str.slice(0, i)) - 1;
      if (lettersMap[code]) {
        find(str.slice(i));
      }
    }
  })(str);
  return ways;
}

console.log(decodeWays("226"));
