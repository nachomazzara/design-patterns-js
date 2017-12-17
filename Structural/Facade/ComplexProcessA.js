const ComplexProcess = require('./ComplexProcess')

module.exports = class ComplexProcessA extends ComplexProcess{
  execute () {
    console.log('executing process A...')
  }
}
