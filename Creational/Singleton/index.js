const singleton = require('./Singleton')

const objectA = singleton.getTime()
setTimeout(() => {
  const objectB = singleton.getTime()
  console.log(`Equal instance ${objectA === objectB}`)
}, 3000)

