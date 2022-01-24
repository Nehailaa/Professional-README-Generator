
//  Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

//  Create an array of questions for user input
const questions = [
    // Information about the user
    {
        type: 'input',
        name: 'userName',
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
    },
    // Information about the project
    {
        type: 'input',
        name: 'projectName',
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
        type: 'input',
        name: 'installation',
        message: 'Provide the project instllation instructions. (Required)',
        validate: installationInfo => {
            if (installationInfo) {
                return true;
            } else {
                console.log('Please provide installation information:');
                return false;
            }
        }
    },
    {
        type: "input",
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInfo => {
            if (usageInfo) {
                return true;
            } else {
                console.log('Please provide the usage info to continue:');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you build this project with? (Check what apply(Required))',
        choices: ['MIT', 'ISC', 'MS-PL', 'LPPL-1.3C', 'APACHE', 'GPLv2', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'Other'],
        validate: licenseInfo => {
            if (licenseInfo) {
                return true;
            } else {
                console.log('Please chooose a license for the project:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the best email to contact you?'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please enter your GitHub link to your project. (Required)',
        validate: linkInfo => {
            if (linkInfo) {
                return true;
            } else {
                console.log('The link of your project is required!');
                return false;
            }
        }
    },
    {
        type: 'confrim',
        name: 'confirmCredits',
        message: 'Would you like to list your collaborators if any?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators:',
        when: ({confirmCredits}) => confirmCredits
    },

];

//  Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log('Great Job! README file is saved!')
    });
 };

//  Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userAndProjectInfo) {
        console.log(userAndProjectInfo)
        writeToFile('README.md', generateMarkdown(userAndProjectInfo));
    });
 };

// Function call to initialize app
init();