/**
 * Singly Linked List Node
 */
class ListNode {
  /**
   * @param {number} val - Value of the node
   * @param {ListNode} [nextNode=null] - Reference to the next node
   */
  constructor(val, nextNode = null) {
    this.val = val;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode(-1);
    this.tail = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let curr = this.head.next;
    let i = 0;
    while (curr) {
      if (i === index) {
        return curr.val;
      }
      i++;
      curr = curr.next;
    }
    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head.next;
    this.head.next = newNode;

    if (!newNode.next) {
      this.tail = newNode;
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let i = 0;
    let curr = this.head;
    while (i < index && curr) {
      i++;
      curr = curr.next;
    }

    // Remove the node ahead of curr
    if (curr && curr.next) {
      if (curr.next === this.tail) {
        this.tail = curr;
      }
      curr.next = curr.next.next;
      return true;
    }
    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    let curr = this.head.next;
    const res = [];
    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    return res;
  }
}

const list = new LinkedList();

console.log("%c Line:16 🍿 list", "color:#7f2b82", list);
console.log("%c Line:26 🌰 list.get(2)", "color:#6ec1c2", list.get(2));

// get values
console.log("%c Line:94 🥔 getValues", "color:#33a5ff", list.getValues());

// insert some nodes to head
console.log(
  "%c Line:43 🍻 list.insertHead(1)",
  "color:#3f7cff",
  list.insertHead(1)
);
console.log(
  "%c Line:110 🍆 list.insertHead(2)",
  "color:#3f7cff",
  list.insertHead(2)
);
console.log(
  "%c Line:111 🍿 list.insertHead(3)",
  "color:#ffdd4d",
  list.insertHead(3)
);
console.log(
  "%c Line:112 🥔 list.insertHead(4)",
  "color:#3f7cff",
  list.insertHead(4)
);

// get values
console.log("%c Line:94 🥔 getValues", "color:#33a5ff", list.getValues());

// insert some nodes to tail
console.log(
  "%c Line:43 🍻 list.insertTail(5)",
  "color:#3f7cff",
  list.insertTail(5)
);
console.log(
  "%c Line:110 🍆 list.insertTail(6)",
  "color:#3f7cff",
  list.insertTail(6)
);
console.log(
  "%c Line:111 🍿 list.insertTail(7)",
  "color:#ffdd4d",
  list.insertTail(7)
);
console.log(
  "%c Line:112 🥔 list.insertTail(8)",
  "color:#3f7cff",
  list.insertTail(8)
);

// get values
console.log("%c Line:94 🥔 getValues", "color:#33a5ff", list.getValues());

// remove a node
console.log("%c Line:72 🍪 remove", "color:#42b983", list.remove(3));

// get values
console.log("%c Line:94 🥔 getValues", "color:#33a5ff", list.getValues());

// get specific value
console.log("%c Line:26 🌰 list.get(3)", "color:#6ec1c2", list.get(3));
