const tap = require('tap')
const LinkedList = require('./linked-list.js')

tap.test('should return linked nodes in same order as added', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.addNode('delta')

  const found = list.head
  const wanted = {
    data: 'bravo',
    next: {
      data: 'delta',
      next: undefined
    }
  }

  t.same(found, wanted)
  t.end()
})

tap.test('should insert after target node', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.addNode('delta')
  list.insertAfter('bravo', 'charlie')

  const found = list.head
  const wanted = {
    data: 'bravo',
    next: {
      data: 'charlie',
      next: {
        data: 'delta',
        next: undefined
      }
    }
  }

  t.same(found, wanted)
  t.end()
})

tap.test('should throw on insert after on empty list', t => {
  const list = new LinkedList()

  t.throws(() => {
    list.insertAfter('foxtrot', 'echo')
  }, new Error('insertAfter on empty list'))
  t.end()
})

tap.test('should throw on insert after with no matching target', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.addNode('delta')

  t.throws(() => {
    list.insertAfter('foxtrot', 'echo')
  }, new Error('insertAfter with no matching target'))
  t.end()
})

tap.test('should insert beginning of the list', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.insertBeginning('alpha')

  const found = list.head
  const wanted = {
    data: 'alpha',
    next: {
      data: 'bravo',
      next: undefined
    }
  }

  t.same(found, wanted)
  t.end()
})

tap.test('should remove after target node', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.addNode('delta')
  list.removeAfter('bravo')

  const found = list.head
  const wanted = {
    data: 'bravo',
    next: undefined
  }

  t.same(found, wanted)
  t.end()
})

tap.test('should throw on remove after with no matching target', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.addNode('delta')

  t.throws(() => {
    list.removeAfter('charlie')
  }, new Error('removeAfter with no matching target'))
  t.end()
})

tap.test('should throw on removeAfter if target is the last node', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.addNode('charlie')

  t.throws(() => {
    list.removeAfter('charlie')
  }, new Error('removeAfter on last node of the list'))
  t.end()
})

tap.test('should remove beginning node', t => {
  const list = new LinkedList()
  list.addNode('bravo')
  list.addNode('delta')
  list.removeBegining()

  const found = list.head
  const wanted = {
    data: 'delta',
    next: undefined
  }

  t.same(found, wanted)
  t.end()
})
