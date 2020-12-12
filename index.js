const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const validation = require('./lib/Validation')



let employeeRole = 'manager';

const roleSpecificQuery = function(employeeRole) {
    switch (employeeRole) {
        case 'manager':
            return {
                type: 'number',
                name: 'officeNumber',
                message: `What is the ${employeeRole}'s office number? (Enter a number)`,
                ...validation.numberInputValidation
            }
    }
}

const employeeInquiries = [
    {
        type: 'input',
        name: 'name',
        message: `What is the name of the ${employeeRole}? (Required)`,
        validate: nameInput => {
            if (nameInput) {
            return true;
            }
            else {
            console.log(`
!!!!! Please enter the ${employeeRole}'s name !!!!!`);
            return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: `What is the ${employeeRole}'s ID? (Enter a number)`,
        ...validation.numberInputValidation
    },
    {
        message: `What is the ${employeeRole}'s email address?`,
        name: "email",
        type: "input",
        // default: () => {},
        ...validation.emailInputValidation
    },
    roleSpecificQuery(employeeRole)
]


function init() {
    
    console.log("Let's get started building your team roster!")
    return inquirer.prompt(employeeInquiries);    
}

init();