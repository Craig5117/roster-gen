const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        this.icon = `fas fa-mug-hot`;
        this.spec = `<p class="p-4">${this.getOfficeNum()}</p>`
    }
// Returns manager's office number in a string
    getOfficeNum() {
        return `Office number: ${this.officeNumber}`;
    }
};

module.exports = Manager;