const ComplexProcessA = require('./ComplexProcessA')
const ComplexProcessB = require('./ComplexProcessB')
const ComplexProcessC = require('./ComplexProcessC')


module.exports = class ComplexProcessFacade {
  constructor () {
    this.complexProcessA = new ComplexProcessA()
    this.complexProcessB = new ComplexProcessB()
    this.complexProcessC = new ComplexProcessC()
  }

  processA () {
    this.complexProcessA.execute()
  }

  processB () {
    this.complexProcessB.execute()
  }

  processC () {
    this.complexProcessC.execute()
  }
}
