/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */
/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
interface LRUNode {
  key: number;
  val: number;
  left: LRUNode | null;
  right: LRUNode | null;
}

class LRUCache {
  #capacity: number;

  #min: LRUNode | null = null;

  #max: LRUNode | null = null;

  #maps: {
    [prop: number]: LRUNode;
  } = {};

  #updateKey(currentNode: LRUNode) {
    if (this.#max === currentNode) {
      return;
    }
    if (this.#min === currentNode) {
      const currentRight = currentNode.right;
      if (currentRight) currentRight.left = null;
      currentNode.right = null;
      this.#min = currentRight;
    } else {
      const currentLeft = currentNode.left;
      const currentRight = currentNode.right;
      if (currentLeft && currentRight) {
        currentLeft.right = currentRight;
        currentRight.left = currentLeft;
      }
      currentNode.left = null;
      currentNode.right = null;
    }
    const oldMax = this.#max;
    if (oldMax) {
      oldMax.right = currentNode;
      currentNode.left = oldMax;
      this.#max = currentNode;
    }
  }

  constructor(capacity: number) {
    this.#capacity = capacity;
  }

  get(key: number): number {
    if (this.#maps[key]) {
      this.#updateKey(this.#maps[key]);
      return this.#maps[key].val;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.#maps[key]) {
      const currentNode = this.#maps[key];
      currentNode.val = value;
      this.#updateKey(currentNode);
    } else {
      const newNode: LRUNode = {
        val: value,
        key,
        left: null,
        right: null,
      };
      this.#maps[key] = newNode;
      if (Object.keys(this.#maps).length === 1) {
        this.#min = newNode;
        this.#max = newNode;
      } else {
        const oldMax = this.#max;
        if (oldMax) {
          oldMax.right = newNode;
          newNode.left = oldMax;
          this.#max = newNode;
        }
        if (Object.keys(this.#maps).length > this.#capacity) {
          if (this.#min?.key !== undefined) {
            delete this.#maps[this.#min.key];
            this.#min = this.#min?.right as LRUNode;
            this.#min.left = null;
          }
        }
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
const cache = new LRUCache(2);
console.log(cache.put(1, 1)); // 缓存是 {1=1}
console.log(cache.put(2, 2)); // 缓存是 {1=1, 2=2}
console.log(cache.get(1)); // 返回 1
console.log(cache.put(3, 3)); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(cache.get(2)); // 返回 -1 (未找到)
console.log(cache.put(4, 4)); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回 3
console.log(cache.get(4)); // 返回 4
