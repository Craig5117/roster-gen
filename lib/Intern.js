const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  }

  getSchool() {
    return `School: ${this.school}`;
  }
}

module.exports = Intern;
