const tap = require('tap')
const LinkedList = require('./linked-list.js')

tap.test('constructing empty list', t => {
  const list = new LinkedList()
  const found = list.head
  const wanted = undefined

  t.equal(found, wanted)
  t.end()
})

tap.test('constructing populated list', t => {
  const found = new LinkedList('linked', 'list').head
  const wanted = { data: 'linked', next: { data: 'list', next: undefined } }

  t.same(found, wanted)
  t.end()
})

tap.test('create node method', t => {
  const list = new LinkedList()
  const found = list.createNode('walla')
  const wanted = { data: 'walla', next: undefined }

  t.same(found, wanted)
  t.end()
})

tap.test('add node method', t => {
  const list = new LinkedList()
  const found = list.addNode(1337)
  const wanted = { head: { data: 1337, next: undefined } }

  t.same(found, wanted)
  t.end()
})

tap.test('insert after method', t => {
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
