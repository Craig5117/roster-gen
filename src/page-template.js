// This stores the individual html blocks for each member
let html = [];
const generateRoster = (teamMembers) => {
  // Loops over teamMembers array and creates an html object for each member. 
  // Rendering is now handled by the Employee class method.
  teamMembers.map((member) => {
  
    // Assembles the html block and adds it to the array
    const coalesced = member.render();

    return (html = [...html, coalesced]);
  });
  // Joins html array and returns it to be added to the template below
  return html.join(' ');
};

module.exports = (teamMembers) => {
  // New promise makes the .then on generatePage in index.js work
  return new Promise((resolve, reject) => {
    const teamHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Your Team</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href='./style.css'>
        </head>
        <body>
            <header class=" has-background-danger has-text-centered p-6">
                <h1 class="title is-2 has-text-white">MyTeam</h1>
            </header>
            <main class="is-flex is-justify-content-center">
                <div class="column is-four-fifths is-full-mobile is-flex is-justify-content-center is-flex-wrap-wrap">
                    ${generateRoster(teamMembers)}
                </div>
            </main>
        </body>
        </html>`;
    if (teamHtml) {
      // Resolves and returns teamHTML to be written in index.js
      console.log("Generating Roster...");
      resolve(teamHtml);
    } else {
      reject();
    }
  });
};
