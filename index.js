// TODO: Include packages needed for this application
//const { existsSync } = require('fs');
const inquirer = require('inquirer');
console.log(inquirer);
//const fs = require('fs');
const generateFile = require('./src/page-template');

// TODO: Create an array of questions for user input
// 1. Questions about the user
const questionsForUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?(Required)',
            Validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Name is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitub',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },

        {
            type: 'input',
            name: 'about',
            message: 'Please provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation behind this project? (Required)',
            validate: motivationInput => {
                if (motivationInput) {
                    return true;
                } else {
                    console.log('Please describe your motivation for this project:');
                    return false;
                }
            }
        }
    ]);
};

// 2. Questions about the project
const projectInput = projectData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter the name of the project:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter the project description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['HTML', 'CSS', 'JavaScript', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please enter your GitHub link to your project. (Required)',
            validate: projectLink => {
                if(projectLink){
                    return true;
                }else{
                    console.log('The link of your project is required!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name : 'confirmCredits',
            message: 'Would you like to list your collaborators if any?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: ' Please list your collaborators :',
            when: ({ confirmCredits}) => confirmCredits
        },
        {
            type: 'checkbox',
            name: 'feedback',
            message: ('What method would you like to receive feedback? (check all that apply'),
            choices: ['Ask a question on https://smuvirtfsfpt1121.slack.com/team/U02KQ1V3AAK', 'Follow me www.linkedin.com/in/nehailaaitbelouali and let me know what you think!', 'Email me with any questions or requets using nehailakarmel@gmail.com']
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license did you build this project with? (Check what apply)',
            choices: ['MIT', 'ISC', 'MS-PL', 'LPPL-1.3C', 'APACHE', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'Other']
        },
        {}
    ])

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



questionsForUser()
.then(projectInput)
.then(projectData => {
    return generateFile(projectData);
})