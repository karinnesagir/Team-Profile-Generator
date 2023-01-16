const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require("./utils/generateHTML.js");


const teamMembers = [];


const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: validate,
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id number?',
      validate: validate,

    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: validate,
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
      validate: validate,
    },
    ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager)
      promptBuildTeam();
    })
};


function validate (value) {
  if (value) {
      return true;
  } else {
      return "Please do not leave the questions blank."
  }
};


const promptBuildTeam = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'addMember',
      message: 'Please select how you would like to continue:',
      choices: [
        'Add an engineer',
        'Add an intern',
        'Finish building my team',
      ],
    }
  ]).then(userChoice => {
    switch (userChoice.addMember){
      case 'Add an engineer':
        promptEngineer();
        break;
      case 'Add an intern':
        promptIntern();
        break;
      default:
        buildTeam();
    }
  });
};


const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineers name?',
      validate: validate,
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineers id number?',
      validate: validate,

    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineers email address?',
      validate: validate,
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is the Engineers GitHub username?',
      validate: validate,
    },
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername);
    teamMembers.push(engineer);
    promptBuildTeam();
  })
};


const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Interns name?',
      validate: validate,
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Interns id number?',
      validate: validate,

    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Interns email address?',
      validate: validate,
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the Interns school name?',
      validate: validate,
    },
  ]).then(answers =>{
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    promptBuildTeam();
  })
};


const buildTeam = () => {
  writeToFile("./output/index.html", generateHTML(teamMembers));
};


function writeToFile(fileName, response) {
  fs.writeFile(fileName, response, function (err) {
      if (err) {
          return console.log(err);
      }
  })
};

promptManager();