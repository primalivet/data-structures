const tap = require('tap')
const LinkedList = require('./linked-list.js')

tap.test('constructing a new list', t => {
  const list = new LinkedList()
  const found = list.head
  const wanted = undefined

  t.equal(found, wanted)
  t.end()
})

tap.test('create node', t => {
  const list = new LinkedList()
  const found = list.createNode('walla')
  const wanted = { data: 'walla', next: undefined }

  t.same(found, wanted)
  t.end()
})

tap.test('add node on empty list', t => {
  const list = new LinkedList()
  const found = list.addNode(1337)
  const wanted = { head: { data: 1337, next: undefined } }

  t.same(found, wanted)
  t.end()
})

tap.test('add node on populated list', t => {
  const list = new LinkedList()
  list.addNode(123)
  list.addNode(456)
  const found = list
  const wanted = { head: { data: 123, next: { data: 456, next: undefined } } }

  t.same(found, wanted)
  t.end()
})

tap.test('insert after on empty list', t => {
  const list = new LinkedList()
  t.throws(list.insertAfter(1, 2), 'insertAfter on empty list')
  t.end()
})

tap.test('insert after on populated list', t => {
  const list = new LinkedList()
  list.addNode(1)
  list.addNode(3)
  list.insertAfter(1, 2)
  const found = list
  const wanted = {
    head: { data: 1, next: { data: 2, next: { data: 3, next: undefined } } }
  }

  t.same(found, wanted)
  t.end()
})

tap.test('insert after with no matching target', t => {
  const list = new LinkedList()
  list.addNode(3)
  list.addNode(4)
  t.throws(
    list.insertAfter(1, 2),
    'insertAfter on list with no matching target'
  )
  t.end()
})

tap.test('insert beginning method', t => {
  const list = new LinkedList()
  list.addNode(2)
  list.insertBeginning(1)

  const found = list
  const wanted = {
    head: { data: 1, next: { data: 2, next: undefined } }
  }

  t.same(found, wanted)
  t.end()
})
