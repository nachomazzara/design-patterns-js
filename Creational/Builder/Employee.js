module.exports = class Employee {

  setSkills (skills) {
    this.skills = skills
  }

  setLaptop (laptop) {
    this.laptop = laptop
  }

  present () {
    console.log(`I am a ${this.skills.name}. I know ${this.skills.list.join(', ')} and work with a ${this.laptop.name}`)
  }
}
