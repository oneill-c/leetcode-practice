class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */

  // O(n)
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.arr = new Array(capacity).fill(0);
  }

  /**
   * @param {number} i
   * @returns {number}
   */

  // O(1)
  get(i) {
    return this.arr[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */

  // O(1)
  set(i, n) {
    this.arr[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */

  // O(n)
  pushback(n) {
    if (this.size === this.capacity) {
      this.resize();
    }

    this.arr[this.size] = n;
    this.size += 1;
  }

  /**
   * @returns {number}
   */

  // O(1)
  popback() {
    this.size -= 1;
    return this.arr[this.size];
  }

  /**
   * @returns {void}
   */

  // O(n)
  resize() {
    this.capacity = this.capacity * 2;
    const newArr = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.arr[i];
    }

    this.arr = newArr;
  }

  /**
   * @returns {number}
   */

  // O(1)
  getSize() {
    return this.size;
  }

  /**
   * @returns {number}
   */

  // O(1)
  getCapacity() {
    return this.capacity;
  }
}
