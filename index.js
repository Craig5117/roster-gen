const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questionSwitch = require('./lib/Questions');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
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




let teamMembers = [];

// const PUBLIC_DIR = path.resolve(__dirname, "public");
// const publicPath = path.join(PUBLIC_DIR, "team.html")

/*
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
*/

function appMenu() {    
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
                        return new Intern(internData.name, internData.id, internData.email, internData.school)
                    }).then(Intern => {
                       teamMembers = [...teamMembers, Intern]
                       mainMenu(); 
                    });      
                    break
                default:
                   generatePage(teamMembers).then(teamHtml => {
                    console.log('Generating Roster...')
                    return fs.writeFile('./dist/index.html', teamHtml, err => {
                        if (err) console.log(err)
                    });
                   })
            }
        })
    }
    
    
    buildManager().then(managerData => {
        return new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    }).then(manager => {
        teamMembers = [...teamMembers, manager];
        mainMenu();
    })

    
}


appMenu();

// (async function app() {
//     try {
//         const team = await appMenu();
//         // await console.log(teamdata);
        
//     }
//     catch (error) {
//         if (error) console.log(error) 
//     }

// })();
