import { Node } from "./node";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index > this.length || index < 0) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    let previousNode = null;
    while (node.nextNode) {
      previousNode = node;
      node = node.nextNode;
    }

    if (previousNode) {
      previousNode.nextNode = null;
      this.tail = previousNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return tail;
  }

  contains(value) {
    if (!this.head) {
      return false;
    }

    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }

    return false;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let index = 0;
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return index;
      }
      node = node.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let string = "";
    let node = this.head;
    while (node) {
      string += `(${node.value}) -> `;
      node = node.nextNode;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Invalid index");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      const nodeBefore = this.at(index - 1);
      newNode.nextNode = nodeBefore.nextNode;
      nodeBefore.nextNode = newNode;
    }

    if (index === this.length) {
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index.");
    }

    let nodeBefore, nodeToRemove;
    if (index === 0) {
      nodeBefore = null;
      nodeToRemove = this.head;
      this.head = this.head.nextNode;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      nodeBefore = this.at(index - 1);
      nodeToRemove = nodeBefore.nextNode;
      nodeBefore.nextNode = nodeToRemove.nextNode;
      if (index === this.length - 1) {
        this.tail = nodeBefore;
      }
    }

    this.length--;
    return true;
  }
}
