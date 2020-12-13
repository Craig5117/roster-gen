let html = [];
const generateRoster = teamMembers => {
    // const { getGithub, getId, getOfficeNum, getRole, getSchool, getEmail, getName, generateRoster } = teamMembers;
    // console.log(generateRoster, typeof generateRoster);
    teamMembers.map(member => {
        let role = member.getRole();
        let icon;
        let spec;
        let name = member.getName();
        let id = member.getId();
        let email = member.getEmail();
        const setIcon = function(role) {
            switch (role) {
                case 'Manager':
                    icon = `fas fa-mug-hot`;
                    return icon;
                case 'Engineer':
                    icon = `fas fa-glasses`;
                    return icon;
                case 'Intern':
                    icon = `fas fa-user-graduate`
                    return icon;
            }
        }
        const setSpec = function() {
            if (member.getGithub) {
                spec = `<a href="https://github.com/${member.getGithub()}"><p class="p-4">GitHub: ${member.getGithub()}</p></a>`;
                return spec;
            }
            else if (member.getSchool) {
                spec = `<p class="p-4">${member.getSchool()}</p>`;
                return spec;
            }
            else if (member.getOfficeNum) {
                spec = `<p class="p-4">${member.getOfficeNum()}</p>`;
                return spec;
            }
        }
    
        
        const coalesced = `
        <div class="card column is-one-quarter m-3 p-0">
            <div class="card-header is-block has-background-info p-4">
                <h2 class="title is-3 has-text-white">${name}</h2>
                <h3 class="has-text-white subtitle is-4"><i class="${setIcon(role)} mr-2"></i>${role}</h3>
            </div>
            <div class="card-content has-background-light">
                <div class="has-background-white">
                    <p class="p-4">${id}</p>
                    <a href="mailto:${email}"><p class="p-4">Email: ${email}</p></a>
                    ${setSpec()}
                </div>
            </div>
        </div>`

        return html = [...html, coalesced];
    })

    return [html];

    
} 

// function exportHTML (teamMembers) {return console.log(
//     `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Your Team</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link rel="stylesheet" href='./style.css'>
// </head>
// <body>
//     <header class=" has-background-danger has-text-centered p-6">
//         <h1 class="title is-2 has-text-white">MyTeam</h1>
//     </header>
//     <main class="is-flex is-justify-content-center">
//         <div class="column is-four-fifths is-flex is-justify-content-center is-flex-wrap-wrap">
//             ${generateRoster(teamMembers)}
//         </div>
//     </main>
// </body>
// </html>`)}

module.exports = teamMembers => {
    return   new Promise((resolve, reject) => {
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
                <div class="column is-four-fifths is-flex is-justify-content-center is-flex-wrap-wrap">
                    ${generateRoster(teamMembers)}
                </div>
            </main>
        </body>
        </html>`;
        if (teamHtml) {
            resolve(teamHtml);
        }
        else {reject()}
    }) 
};