const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

// This object holds the validation properties for the prompts that accept a Number as a response. They will be spread over their respective objects using ...
const numberInputValidation = {
    validate: input => {
        if (!input) {
            console.log(`
!!!!! Please enter a number !!!!!`)
            return false;
        }
        else {
            return true;
        }
    },
    filter: input => {
        if (Number.isNaN(input) || Number(input) <= 0) {
        // this clears the NaN from the input area.
            return '';
        }
        else {
            return Number(input);
        }
    }

}

const emailInputValidation = {
    validate: function (email) {
        // Might consider increasing the domain range, but this accommodates the most common email domains
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

        if (valid) {
            return true;
        } 
        else {
            console.log(`
    !!!!! Please enter a valid email !!!!!`)
            return false;
        }
    }
};

let employeeRole = 'manager';

const roleSpecificQuery = function(employeeRole) {
    switch (employeeRole) {
        case 'manager':
            return {
                type: 'number',
                name: 'officeNumber',
                message: `What is the ${employeeRole}'s office number? (Enter a number)`,
                ...numberInputValidation
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
        ...numberInputValidation
    },
    {
        message: `What is the ${employeeRole}'s email address?`,
        name: "email",
        type: "input",
        // default: () => {},
        ...emailInputValidation
    },
    roleSpecificQuery(employeeRole)
]


function init() {
    
    console.log("Let's get started building your team roster!")
    return inquirer.prompt(employeeInquiries);    
}

init();