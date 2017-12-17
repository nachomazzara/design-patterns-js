const ComplexProcess = require('./ComplexProcess')

module.exports = class ComplexProcessC extends ComplexProcess{
  execute () {
    console.log('executing process C...')
  }
}
