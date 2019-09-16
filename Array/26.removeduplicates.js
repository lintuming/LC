function removeDuplicates(sortedArr) {
  let i = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      sortedArr.splice(i, 1);
      i--;
    }
  }
  return sortedArr.length;
}
