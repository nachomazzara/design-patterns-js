class Singleton {
  constructor () {
    this.time = new Date()
  }

  getTime () {
    return this.time
  }
}

module.exports = new Singleton()
