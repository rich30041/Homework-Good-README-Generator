const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/createMD');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "install",
        message: "Provide any installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the project usage."
    },
    {
        type: "input",
        name: "contrib",
        message: "Provide any contributing parties."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide any project tests."
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT',
        choices: [
            'ISC',
            'MIT',
            'GNU GPL v3.0'
        ]
    },
    {
        type: "input",
        name: "ghubName",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    }

];
inquirer 
    .prompt(questions)
    .then(function(data) {
        console.log(data.license)

            if (data.license == 'ISC') {
               data.License =  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"; 
            } else if (data.license =='MIT') {
                data.License = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            } else if (data.license == 'GNU GPL v3.0') {
                data.License = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"; 
            };


    fs.writeFile("README.md", generate(data), function(err) {
        if (err) {
          throw err;
        };
        console.log("New README file created with success!");
    });
});
