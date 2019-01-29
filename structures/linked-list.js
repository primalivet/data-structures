function LinkedList () {
  this.head = undefined
}

LinkedList.prototype.createNode = function (data) {
  return {
    data,
    next: undefined
  }
}

LinkedList.prototype.addNode = function (data = undefined) {
  const node = this.createNode(data)

  if (this.head === undefined) {
    this.head = node
  } else {
    // start traverseing the list from the head...
    let currentNode = this.head

    // ...keep traversing as long as the current node has a next node
    while (currentNode.next !== undefined) {
      // update current node to the next node
      currentNode = currentNode.next
    }

    // link the last node to the newly created node
    currentNode.next = node
  }

  return this
}

LinkedList.prototype.insertAfter = function (targetData, data) {
  const node = this.createNode(data)

  if (this.head === undefined) {
    throw new Error('insertAfter on empty list')
  }

  let currentNode = this.head
  let targetNode

  while (currentNode.next !== undefined) {
    if (currentNode.data === targetData) {
      targetNode = currentNode
      break
    }
    currentNode = currentNode.next
  }

  if (targetNode === undefined) {
    throw new Error('insertAfter with no matching target')
  }
  node.next = targetNode.next
  targetNode.next = node

  return this
}

LinkedList.prototype.insertBeginning = function (data) {
  const node = this.createNode(data)
  node.next = this.head
  this.head = node

  return this
}

LinkedList.prototype.removeAfter = function (targetData) {
  let currentNode = this.head
  let targetNode

  while (true) {
    if (currentNode.data === targetData) {
      targetNode = currentNode
      break
    }

    if (currentNode.next === undefined) {
      break
    } else {
      currentNode = currentNode.next
    }
  }

  if (targetNode === undefined) {
    throw new Error('removeAfter with no matching target')
  }

  if (targetNode.next === undefined) {
    throw Error('removeAfter on last node of the list')
  }

  targetNode.next = targetNode.next.next

  return this
}

LinkedList.prototype.removeBegining = function () {
  this.head = this.head.next

  return this
}

module.exports = LinkedList
