const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const menu = require('node-menu')
const questionSwitch = require('./lib/Questions');
const inquirer = require('inquirer');
const appLogo = `
██████╗  ██████╗ ███████╗████████╗███████╗██████╗     
██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗    
██████╔╝██║   ██║███████╗   ██║   █████╗  ██████╔╝    
██╔══██╗██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗    
██║  ██║╚██████╔╝███████║   ██║   ███████╗██║  ██║    
╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝    
                                                      
     ██████╗ ███████╗███╗   ██╗                       
    ██╔════╝ ██╔════╝████╗  ██║                       
    ██║  ███╗█████╗  ██╔██╗ ██║                       
    ██║   ██║██╔══╝  ██║╚██╗██║                       
    ╚██████╔╝███████╗██║ ╚████║                       
     ╚═════╝ ╚══════╝╚═╝  ╚═══╝                       
                                                      \n`;





function appMenu() {
    let teamMembers = [];
    
    function buildManager() {
        console.log(appLogo)
        console.log("Let's get started building your team roster!")
        return questionSwitch('manager');    
    }

    function buildEngineer() {
        return  questionSwitch('engineer')
    }

    function buildIntern() {
        return questionSwitch('intern');
    }

    function mainMenu() {
    console.log(appLogo)
        return inquirer.prompt([
            {
                type: 'list',
                name: 'menuChoice',
                message: 'Add Your Team Members',
                choices: ['1. Add Engineer', '2. Add Intern', '3. Quit']
            }
        ]).then(selection => {
            switch (selection.menuChoice) {
                case '1. Add Engineer':
                    buildEngineer().then(engineerData => {
                        return new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
                    }).then(engineer => {
                       teamMembers = [...teamMembers, engineer]
                       mainMenu(); 
                    });
                    break;      
                case '2. Add Intern':
                    buildIntern().then(internData => {
                        return new Intern(internData.name, internData.id, internData.email, internData.github)
                    }).then(Intern => {
                       teamMembers = [...teamMembers, Intern]
                       mainMenu(); 
                    });      
                    break
                case '3. Quit':
                    return teamMembers;
            }
        }).then(team => {
            return team;
        })
    }
    
    // function app() {
    buildManager().then(managerData => {
        return new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    }).then(manager => {
        teamMembers = [...teamMembers, manager];
        mainMenu();
    })
// }
    
}


(async function app() {
    try {
        const team = await appMenu();
        // await console.log(teamdata);
        
    }
    catch (error) {
        if (error) console.log(error) 
    }

})();
