// import level from 'level'

// export function init() {
//   console.log('IN MAIN VERSION')
//   return new Promise ((resolve, reject) => {
    
//     level('simple-db', {}, (err, db) => resolve(db))
//   })
// }


const level = require('level')
module.exports = name => new Promise ((resolve, reject) => {
  level(name, {}, (err, db) => err ? reject(err) : resolve(db))
})
