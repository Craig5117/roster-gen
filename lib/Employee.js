class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }
// Returns employee name
  getName() {
    return this.name;
  }
// Returns employee ID
  getId() {
    return `ID: ${this.id}`;
  }
// Returns employee email
  getEmail() {
    return `${this.email}`;
  }
// Returns employee role
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
