/**
 * Pair class to store key-value pairs
 */
class Pair {
  /**
   * @param {number} key The key to be stored in the pair
   * @param {string} value The value to be stored in the pair
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  insertionSort(pairs) {
    const n = pairs.length;
    const result = [];

    for (let i = 0; i < n; i++) {
      let j = i - 1;

      while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
        [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
        j -= 1;
      }

      result.push([...pairs]);
    }

    return result;
  }
}

const solution = new Solution();

console.log(
  "%c Line:42 🍫 Test #1",
  "color:#f5ce50",
  solution.insertionSort([
    new Pair(5, "apple"),
    new Pair(2, "banana"),
    new Pair(9, "cherry"),
  ])
);

console.log(
  "%c Line:39 🥃 Test #2",
  "color:#f5ce50",
  solution.insertionSort([
    new Pair(3, "cat"),
    new Pair(3, "bird"),
    new Pair(2, "dog"),
  ])
);
