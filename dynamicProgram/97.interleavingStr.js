function isInterLeave(s1, s2, s3) {
  let result = false;
  function isInterLeaveImpt(s1, s2, s3) {
    const letter = s3[0];
    if (s1.length === 0 && s2.length === 0 && s3.length === 0) {
      return (result = true);
    }
    if (s1.length + s2.length !== s3.length) {
      return (result = false);
    }
    if (s1[0] === letter) {
      isInterLeaveImpt(s1.slice(1), s2, s3.slice(1));
    }
    if (s2[0] === letter) {
      isInterLeaveImpt(s1, s2.slice(1), s3.slice(1));
    }
  }
  isInterLeaveImpt(s1, s2, s3);
  return result;
}

console.log(isInterLeave("ad", "bc", "abcd"));
