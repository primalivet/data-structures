const tap = require('tap')
const BinaryTree = require('./binary-search-tree.js')

tap.test('should only add nodes to the right left', t => {
  const tree = new BinaryTree()
  tree.addNode(100)
  tree.addNode(50)
  tree.addNode(25)

  const found = tree.root
  const wanted = {
    data: 100,
    left: {
      data: 50,
      left: {
        data: 25,
        left: undefined,
        right: undefined
      },
      right: undefined
    },
    right: undefined
  }

  t.same(found, wanted)
  t.end()
})

tap.test('should only add nodes to the right', t => {
  const tree = new BinaryTree()
  tree.addNode(25)
  tree.addNode(50)
  tree.addNode(100)

  const found = tree.root
  const wanted = {
    data: 25,
    right: {
      data: 50,
      right: {
        data: 100,
        right: undefined,
        left: undefined
      },
      left: undefined
    },
    left: undefined
  }

  t.same(found, wanted)
  t.end()
})

tap.test('should return result right of root', t => {
  const tree = new BinaryTree()
  tree.addNode(25)
  tree.addNode(50)
  tree.addNode(100)

  const found = tree.search(100)
  const wanted = {
    data: 100,
    right: undefined,
    left: undefined
  }

  t.same(found, wanted)
  t.end()
})

tap.test('should return false when searching for non existing value', t => {
  const tree = new BinaryTree()
  tree.addNode(30)
  tree.addNode(10)
  tree.addNode(20)

  const found = tree.search(15)
  const wanted = false

  t.same(found, wanted)
  t.end()
})
