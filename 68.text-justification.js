/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const res = [[]];
  res[0].letters = 0;
  let row = res[0];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // to next row
    if (row.length && row.letters + row.length + word.length > maxWidth) {
      const nextRow = [];
      res.push(nextRow);
      nextRow.letters = 0;
      row = nextRow;
    }
    row.push(word);
    row.letters += word.length;
  }
  for (let j = 0; j < res.length; j++) {
    const row = res[j];
    if (row.length === 1 || j === res.length - 1) {
      res[j] =
        row.join(" ") + " ".repeat(maxWidth - (row.letters+row.length-1));
      continue;
    }
    const spaces = maxWidth - row.letters;
    let line = row[0];
    const minSpace = (spaces / (row.length - 1)) | 0;
    const extraSpaces = spaces % (row.length - 1);
    for (let i = 1; i < row.length; i++) {
      line += `${" ".repeat(minSpace)}${i <= extraSpaces ? " " : ""}${row[i]}`;
    }

    res[j] = line;
  }
  return res;
};
// @lc code=end
