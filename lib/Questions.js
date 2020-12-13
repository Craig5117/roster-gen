const inquirer = require('inquirer');
// imports validation for numbers and email
const validation = require('./Validation')

// switches questions based on employeeRole
function questionSwitch(employeeRole) {
    this.employeeRole = employeeRole
    let role = this.employeeRole;
    const roleSpecificQuery = function(role) {
        switch (role) {
            case 'manager':
                return {
                    type: 'number',
                    name: 'officeNumber',
                    message: `What is the ${role}'s office number? (Enter a number)`,
                    ...validation.numberInputValidation
                }
            case 'engineer':
                return {
                    type: 'input',
                    name: 'github',
                    message: `What is the ${role}'s GitHub Username? (Required)`,
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        }
                        else {
                        console.log(`
    !!!!! Please enter the ${role}'s GitHub Username !!!!!`);
                        return false;
                        }
                    }
                }
            case 'intern':
                return {
                    type: 'input',
                    name: 'school',
                    message: `What school does the ${role} attend?`,
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
    // general employee questions
    const employeeQueries = [
        {
            type: 'input',
            name: 'name',
            message: `What is the name of the ${role}? (Required)`,
            validate: nameInput => {
                if (nameInput) {
                return true;
                }
                else {
                console.log(`
    !!!!! Please enter the ${role}'s name !!!!!`);
                return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: `What is the ${role}'s ID? (Enter a number)`,
            ...validation.numberInputValidation
        },
        {
            type: "input",
            name: "email",
            message: `What is the ${role}'s email address?`,
            ...validation.emailInputValidation
        },
        roleSpecificQuery(role),
    ];
    
    return inquirer.prompt(employeeQueries);
    
            
    
}

module.exports = questionSwitch