const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questionSwitch = require("./lib/Questions");
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template.js");
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

// Array that stores each team member object
let teamMembers = [];
// This function builds the team members array and writes the file
function appMenu() {
  // Sends manager to questionSwitch and returns user input  prompts
  function buildManager() {
    console.clear();
    console.log(appLogo);
    console.log("Let's get started building your team roster!");
    return questionSwitch("manager");
  }
  // Sends engineer to questionSwitch and returns user input from prompts
  function buildEngineer() {
    return questionSwitch("engineer");
  }
  // Sends intern to questionSwitch and returns user input from prompts
  function buildIntern() {
    return questionSwitch("intern");
  }
  // Activates the main menu which recursively calls itself each time a team member is created until the user quits
  function mainMenu() {
    console.clear();
    console.log(appLogo);
    return inquirer
      .prompt([
        {
          type: "list",
          name: "menuChoice",
          message: "Add Your Team Members",
          choices: ["Add Engineer", "Add Intern", "Quit"],
        },
      ])
      .then((selection) => {
        switch (selection.menuChoice) {
          case "Add Engineer":
            // Creates an Engineer based on user input and returns to the main menu
            buildEngineer()
              .then((engineerData) => {
                return new Engineer(
                  engineerData.name,
                  engineerData.id,
                  engineerData.email,
                  engineerData.github
                );
              })
              .then((engineer) => {
                teamMembers = [...teamMembers, engineer];
                mainMenu();
              });
            break;
          case "Add Intern":
            // Creates an intern based on user input and returns to the main menu
            buildIntern()
              .then((internData) => {
                return new Intern(
                  internData.name,
                  internData.id,
                  internData.email,
                  internData.school
                );
              })
              .then((Intern) => {
                teamMembers = [...teamMembers, Intern];
                mainMenu();
              });
            break;
          default:
            // Sends the teamMembers array to page-template.js and recieves HTML response
            generatePage(teamMembers).then((teamHtml) => {
              console.log("Writing HTML. Check it out at dist/index.html");
              // writes the file based on the HTML received from generatePage
              return fs.writeFile("./dist/index.html", teamHtml, (err) => {
                if (err) console.log(err);
              });
            });
        }
      });
  }

  // Creates a new manager based on user input and initiates the main menu
  buildManager()
    .then((managerData) => {
      return new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );
    })
    .then((manager) => {
      teamMembers = [...teamMembers, manager];
      mainMenu();
    });
}

appMenu();
