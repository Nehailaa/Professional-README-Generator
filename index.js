// TODO: Include packages needed for this application
const { existsSync } = require('fs');
const inquirer = require('inquirer');
console.log(inquirer);
//const fs = require('fs');
//const generateFile = require('./src/templateReadme');

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


//questionsForUser();