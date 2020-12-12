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
        case 'engineer':
            return {
                type: 'input',
                name: 'github',
                message: `What is the ${employeeRole}'s GitHub Username? (Required)`,
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    }
                    else {
                    console.log(`
!!!!! Please enter the ${employeeRole}'s GitHub Username !!!!!`);
                    return false;
                    }
                }
            }
        case 'intern':
            return {
                type: 'input',
                name: 'school',
                message: `What school does the ${employeeRole} attend? (You may enter N/A if not available)`,
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    }
                    else {
                        console.log(`
!!!!! Please enter a school name or N/A !!!!!`)
                    }
                }
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
        type: "input",
        name: "email",
        message: `What is the ${employeeRole}'s email address?`,
        ...validation.emailInputValidation
    },
    roleSpecificQuery(employeeRole),
    {
    
    }
]


function init() {
    
    console.log("Let's get started building your team roster!")
    return inquirer.prompt(employeeInquiries);    
}

init();