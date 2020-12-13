const generateRoster = teamData => {
    teamData.map(member => {

        let spec;
        if (member.getGithub) {
            spec = member.getGithub();
        }
        else if (member.getSchool) {
            spec = member.getSchool();
        }
        else if (member.getOfficeNum) {
            spec = member.getOfficeNum()
        }
        let name = member.getName();
        let role = member.getRole();
        let id = member.getId();
        let email = member.getEmail();
        
        return console.log(`
        <div>
        <h2>${name}</h2>
        <h3>${role}</h3>
        <p>${id}</p>
        <p>${email}</p>
        <p>${spec}</p>
        </div>`)
    })
    
} 

module.exports = teamData => {
    return generateRoster(teamData);
};