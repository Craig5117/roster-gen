const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = 'Engineer';
    this.icon = `fas fa-glasses`;
    this.spec = `<a href="https://github.com/${this.getGithub()}" target="_blank"><p class="p-4">GitHub: ${this.getGithub()}</p></a>`
  }

  getGithub() {
    return this.github;
  }

}

module.exports = Engineer;
