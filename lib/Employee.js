class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
    this.icon = '';
    this.spec = '';
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
// Returns the icon for employee role. For Employee, icon is empty ''
  getIcon() {
    return this.icon;
  }
// Returns the HTML string for the special property for employee role 
  getSpec() {
    return this.spec;
  }

// Renders the HTML block for this employee's roster card
  render() {
    return `
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">${this.getName()}</h2>
            <h3 class="has-text-white subtitle is-4"><i class="${this.getIcon()} mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">${this.getId()}</p>
                <a href="mailto:${this.getEmail()}"><p class="p-4">Email: ${this.getEmail()}</p></a>
                ${this.getSpec()}
            </div>
        </div>
    </div>`;
  }
}

module.exports = Employee;
