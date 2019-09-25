function majorityEle(inputs) {
  const baseTimes = inputs.length / 2;
  const map = {};
  let majorityEle = null,
    max = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (map[inputs[i]] !== undefined) {
      map[inputs[i]] += 1;
    } else {
      map[inputs[i]] = 0;
    }
    const time=map[inputs[i]];
    time > max ? ((max = time), (majorityEle = inputs[i])) : void 0;
  }
  return majorityEle;
}

console.log(majorityEle([2,2,1,1,1,2,2,3]));
