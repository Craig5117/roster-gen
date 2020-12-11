class Employee {
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        return `Employee Name: ${this.name}`
    }
}

module.exports = Employee;