const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
// Returns manager's office number in a string
    getOfficeNum() {
        return `Office: ${this.officeNumber}`;
    }    
};

module.exports = Manager;