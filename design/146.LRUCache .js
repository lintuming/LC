class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    //we use circular double linked list
    this.head = this.tail = null;
    this.hashTable = new Map();
    this.total = 0;
  }

  put(key, value) {
    if (this.hashTable.has(key)) {
      this.hashTable.get(key).value = value;
      this.get(key);
    } else {
      const node = { key, prev: null, next: null, value };
      this.hashTable.set(key, node);
      if (!this.head) {
        this.head = this.tail = node;
      }
      node.next = this.head;
      node.prev = this.tail;
      this.head.prev = node;
      this.tail.next = node;
      this.head = node;
      this.total++;
    }
    if (this.total > this.capacity) {
      const shouldDelete = this.tail;
      this.tail = shouldDelete.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
      this.hashTable.delete(shouldDelete.key);
      this.total--;
    }
  }

  get(key) {
    if (this.hashTable.has(key)) {
      const node = this.hashTable.get(key);
      const { value, prev, next } = node;
      if (this.head === node) return value;
      if (this.tail === node) {
        this.head = node;
        this.tail = node.prev;
        return value;
      }
      node.next = this.head;
      node.prev = this.tail;
      this.tail.next = node;
      this.head.prev = node;
      return value;
    } else {
      return -1;
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
