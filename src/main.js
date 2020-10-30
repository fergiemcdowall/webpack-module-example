import level from 'level'

const writeAndRead = () => {
  return new Promise ((resolve, reject) => {
    level('simple-db', {}, (err, db) => {
      return db.put('foo', 'BAAAAAAAR')
        .then(() => db.get('foo'))
        .then(resolve)
    })
  })
};

export default writeAndRead
//export writeAndRead
