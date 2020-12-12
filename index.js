const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const employeeQueries = require('./lib/Questions');
const questionSwitch = require('./lib/Questions');


function init() {
    console.log("Let's get started building your team roster!")
    return questionSwitch('manager');    
}


(async function app() {
    const teamData = await init();
    console.log(teamData);

})();



