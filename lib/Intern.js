const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  }
// Returns  intern's school
  getSchool() {
    return `School: ${this.school}`;
  }
}

module.exports = Intern;
