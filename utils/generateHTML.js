const addMembers = (team) => {
    const html = [];

    const addManager = manager => {
        let managerHTML = `
        <section>
            <h2>${manager.name} - Manager</h2>
            <ul>
                <li>ID: ${manager.id}</li>
                <li>Email: <span><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li>Office Number: ${manager.officeNumber}</li>
            </ul>
        </section>
        `;
        html.push(managerHTML);
    }

    const addEngineer = engineer => {
        let engineerHTML = `
        <section>
            <h2>${engineer.name} - Engineer</h2>
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></li>
                <li>GitHub Username: <a href='http://github.com/${engineer.githubUsername}'>${engineer.githubUsername}</a></li>
            </ul>
        </section>
        `;
        html.push(engineerHTML);
    }

    const addIntern = intern => {
        let internHTML = `
        <section>
            <h2>${intern.name} - Intern</h2>
            <ul>
                <li>ID: ${intern.id}</li>
                <li>Email: <a href='mailto:${intern.email}'>${intern.email}</a></li>
                <li>School: ${intern.school}</li>
            </ul>
        </section>
        `;
        html.push(internHTML);
    }

    console.log(team);

    for (let i = 0; i < team.length; i++) {
        if (team[i].getTitle() === "Manager") {
            addManager(team[i]);
        };
        if (team[i].getTitle() === "Engineer") {
            addEngineer(team[i]);
        };
        if (team[i].getTitle() === "Intern") {
            addIntern(team[i]);
        };
    };

    return html.join('');
};



module.exports = team => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style.css"/>
    </head>
    <body>
        <Header>
            <h1 class='mb-0'>Team Builder</h1>
        </Header>
        <main>
            ${addMembers(team)}
        </main>
    </body>
    </html>
    `;
};