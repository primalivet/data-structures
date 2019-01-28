function LinkedList (...datas) {
  this.head = undefined

  // add all the datas as new nodes
  while (datas.length) {
    this.addNode(datas.shift())
  }
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

  let currentNode = this.head

  while (currentNode.next !== undefined) {
    if (currentNode.data === targetData) {
      node.next = currentNode.next
      currentNode.next = node
      break
    }
    currentNode = currentNode.next
  }

  return this
}

// TODO: removeAfter - remove node after target node
// TODO: inserBeginning - insert node before first node
// TODO: removeBegining - remove the first node

module.exports = LinkedList
