import { init } from '../src/main.js'
init().then(db => {
  db.put('foo', 'bar').then(() => db.get('foo')).then(console.log)
})
