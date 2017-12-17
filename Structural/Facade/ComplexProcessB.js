const ComplexProcess = require('./ComplexProcess')

module.exports = class ComplexProcessB extends ComplexProcess{
  execute () {
    console.log('executing process B...')
  }
}
