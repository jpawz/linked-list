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
    while (node.nextNode) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }
    if (node.value === value) {
      return true;
    }
    return false;
  }
}
