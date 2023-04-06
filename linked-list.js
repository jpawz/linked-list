import { Node } from "./node";

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = this.headNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = this.headNode;
    } else {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    if (index > this.length || index < 0) {
      return null;
    }
    let node = this.headNode;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    if (!this.headNode) {
      return null;
    }

    let node = this.headNode;
    let previousNode = null;
    while (node.nextNode) {
      previousNode = node;
      node = node.nextNode;
    }

    if (previousNode) {
      previousNode.nextNode = null;
      this.tailNode = previousNode;
    } else {
      this.headNode = null;
      this.tailNode = null;
    }

    this.length--;
    return this.tailNode;
  }

  contains(value) {
    if (!this.headNode) {
      return false;
    }

    let node = this.headNode;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }

    return false;
  }

  find(value) {
    if (!this.headNode) {
      return null;
    }

    let index = 0;
    let node = this.headNode;
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
    let node = this.headNode;
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
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    } else {
      const nodeBefore = this.at(index - 1);
      newNode.nextNode = nodeBefore.nextNode;
      nodeBefore.nextNode = newNode;
    }

    if (index === this.length) {
      this.tailNode = newNode;
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
      nodeToRemove = this.headNode;
      this.headNode = this.headNode.nextNode;
      if (this.length === 1) {
        this.tailNode = null;
      }
    } else {
      nodeBefore = this.at(index - 1);
      nodeToRemove = nodeBefore.nextNode;
      nodeBefore.nextNode = nodeToRemove.nextNode;
      if (index === this.length - 1) {
        this.tailNode = nodeBefore;
      }
    }

    this.length--;
    return true;
  }
}
