// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const generateMarkdown = require ("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a short description describing the what, why and how of the project.',
    name: 'description',
},
{
    type: 'input',
    message: 'List the table of contents.',
    name: 'content',
},
{
    type: 'input',
    message: 'What was your motivation?',
    name: 'motivation',
},
{
    type: 'input',
    message: 'What are the installation instuctions?',
    name: 'installation',
},
{
    type: 'input',
    message: 'What is the usage information?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Which license did you choose?',
    name: 'license',
},
{
    type: 'input',
    message: 'What are the key features of this project?',
    name: 'feature',
},
{
    type: 'input',
    message: 'How can othe users contribute to this project?',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Write tests for your application. (optional)',
    name: 'test',
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        writeToFile("./output/README.md", data )
    })
}

// Function call to initialize app
init();
