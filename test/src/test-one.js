const test     = require('tape')
const myModule = require('../../')

const sandbox = 'test/sandbox/'
const indexName = sandbox + 'test-one'

test('test test', t => {
  t.plan(1)
  t.ok('OK')
})

test('create a new database', t => {
  t.plan(1)
  myModule(indexName).then(db => {
    global[indexName] = db
    t.ok(db)
  })
})

test('put some data into the database', t => {
  t.plan(1)
  global[indexName].batch([
    { type: 'put', key: 'one', value: '1' },
    { type: 'put', key: 'two', value: '2' },
    { type: 'put', key: 'three', value: '3' },
    { type: 'put', key: 'four', value: '4' }
  ], t.error)
})

test('read some data from the database', t => {
  t.plan(4)
  global[indexName].get('one').then(result => t.equals(result, '1'))
  global[indexName].get('two').then(result => t.equals(result, '2'))
  global[indexName].get('three').then(result => t.equals(result, '3'))
  global[indexName].get('four').then(result => t.equals(result, '4'))
})

