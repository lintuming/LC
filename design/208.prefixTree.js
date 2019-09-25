class Trie {
  constructor() {
    this.map = {};
  }
  insert(str) {
    let node = this.map;
    for (let i = 0; i < str.length; i++) {
      node = node[str[i]] || (node[str[i]] = {});
      if (i === str.length - 1) {
        node.isEnd = true;
      }
    }
  }
  search(str, isPrefix) {
    let node = this.map;
    for (const i of str) {
      if (!node[i]) return false;
      node = node[i];
    }
    return !!isPrefix || node.isEnd;
  }
  startsWith(prefix) {
    return this.search(prefix, true);
  }
}

const trie = new Trie();

