import level from 'level'

//const initDB = () => new Promise ((resolve, reject) => {
export function init() {
  return new Promise ((resolve, reject) => {
    level('simple-db', {}, (err, db) => resolve(db))
  })
}
                                 

//export default initDB
