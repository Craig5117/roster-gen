const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = 'Engineer';
  }
// Returns link to engineer's github profile
  getGithub() {
    return `https://github.com/${this.github}`;
  }
}

module.exports = Engineer;
