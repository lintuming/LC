class WordSeach {
  constructor() {
    this.root = {};
  }
  addWord(word) {
    let prevNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const currentNode = prevNode[letter] || (prevNode[letter] = {});
      if (i === word.length - 1) {
        currentNode.isEnd = true;
      }
      prevNode = currentNode;
    }
  }
  search(word) {
    return this.searchImp(word, this.root);
  }
  searchImp(word, context) {
    const letter = word[0];
    const isLastLetter = word.length === 1;
    if (letter === ".") {
      const keys = Object.keys(context);
      while (keys.length) {
        const key = keys.shift();
        if (key === "isEnd") {
          continue;
        }
        if (isLastLetter && context[key].isEnd) {
          return true;
        }
        if (this.searchImp(word.slice(1), context[key])) {
          return true;
        }
      }
      return false;
    }
    if (context[letter]) {
      if (isLastLetter) {
        return !!context[letter].isEnd;
      }
      return this.searchImp(word.slice(1), context[letter]);
    } else {
      return false;
    }
  }
}

class WordSeach2 {
  constructor() {
    this.root = {};
  }
  addWord(word) {
    const node = this.root[word.length] || (this.root[word.length] = []);
    node.push(word);
  }
  search(word) {
    const wordList = this.root[word.length];
    if (!wordList) return false;
    return (
      wordList.filter(addedWord => {
        return addedWord.split("").every((letter, idx) => {
          return word[idx] === letter || word[idx] === ".";
        });
      }).length > 0
    );
  }
}

const wordSeach = new WordSeach2();
wordSeach.addWord("bad");
wordSeach.addWord("dad");
wordSeach.addWord("mad");
console.log(wordSeach.root);
console.log(wordSeach.search("pad"));
console.log(wordSeach.search("bad"));
console.log(wordSeach.search(".ad"));
console.log(wordSeach.search("b.."));
console.log(wordSeach.search("b.d"));
console.log(wordSeach.search("b."));
