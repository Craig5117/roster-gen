const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
    this.icon = `fas fa-user-graduate`;
    this.spec = `<p class="p-4">${this.getSchool()}</p>`
  }
// Returns  intern's school
  getSchool() {
    return `School: ${this.school}`;
  }
}

module.exports = Intern;
