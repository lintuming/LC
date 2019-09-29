function perfectSquares(n) {
  const squares = [1];
  let i = 2;
  while (squares[squares.length - 1] < n) {
    squares.push(i ** 2);
    i++;
  }
  let perfectNum = Number.MAX_VALUE;
  function findPerfect(n, count) {
    if (count > perfectNum) {
      return;
    }
    if (n === 0) {
      return (perfectNum = Math.min(perfectNum, count));
    }
    for (let i = 0; i < squares.length; i++) {
      const square = squares[i];
      const next = n - square;
      if (next >= 0) {
        findPerfect(n - square, count + 1);
      }
    }
  }

  findPerfect(n, 0);
  return perfectNum;
}

console.log(perfectSquares(13));
