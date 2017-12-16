const Employee = require('./Employee')
const PMSkills = require('./PMSkills')
const FullStackSkills = require('./FullStackSkills')
const MacbookPro = require('./MacbookPro')
const MacbookAir = require('./MacbookAir')

class EmployeeBuilder {
  createFullStackDeveloper () {
    const employee = new Employee ()
    employee.setLaptop(new MacbookPro())
    employee.setSkills(new FullStackSkills())
    return employee
  }

  createPM () {
    const employee = new Employee ()
    employee.setLaptop(new MacbookAir())
    employee.setSkills(new PMSkills())
    return employee
  }
}

module.exports = new EmployeeBuilder()
