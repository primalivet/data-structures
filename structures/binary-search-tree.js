function Node (data) {
  this.data = data
  this.left = undefined
  this.right = undefined
}

Node.prototype.addNode = function (data) {
  if (this.data >= data) {
    if (this.left === undefined) {
      this.left = new Node(data)
    } else {
      this.left.addNode(data)
    }
  } else {
    if (this.right === undefined) {
      this.right = new Node(data)
    } else {
      this.right.addNode(data)
    }
  }
}

Node.prototype.search = function (query) {
  // this nodes data matches query
  if (this.data === query) {
    return this
    // continue down the tree
  } else {
    if (this.data >= query && this.left !== undefined) {
      return this.left.search(query)
    } else if (this.data < query && this.right !== undefined) {
      return this.right.search(query)
    } else {
      return false
    }
  }
}

function BinarySearchTree () {
  this.root = undefined
}

BinarySearchTree.prototype.addNode = function (data) {
  if (this.root === undefined) {
    this.root = new Node(data)
  } else {
    this.root.addNode(data)
  }
}

BinarySearchTree.prototype.search = function (query) {
  return this.root.search(query)
}

module.exports = BinarySearchTree
