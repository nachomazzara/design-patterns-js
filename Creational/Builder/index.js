const EmployeeBuilder = require ('./EmployeeBuilder')

const productManager = EmployeeBuilder.createPM()
const fullStackDeveloper = EmployeeBuilder.createFullStackDeveloper()

const coworkers = new Array(productManager, fullStackDeveloper)

const log = (employee) => employee.present()

coworkers.map(log)


