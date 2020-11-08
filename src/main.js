const level = require('level')
module.exports = name => new Promise ((resolve, reject) => {
  level(name, {}, (err, db) => err ? reject(err) : resolve(db))
})
