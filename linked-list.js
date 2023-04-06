class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(newNode) {
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  prepend(newNode) {
    const node = this.head;
    this.head = newNode;
    this.head.next = node;
  }
}
