function sameTree(a, b) {
  function search(a, b, current) {
    const left = current * 2 + 1,
      right = current * 2 + 2;
    if (a[current] === b[current]) {
      if (a[current]) {
        return search(a, b, left) && search(b, a, right);
      }
      //empty node
      return true;
    }
    //not same node
    return false;
  }
  return search(a, b, 0);
}


