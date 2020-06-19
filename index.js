const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const userName = "tdev77"
const queryUrl = `https://api.github.com/users/${userName}`;
const api = require("./utils/api.js");
var generateMarkdown = require('./utils/markdown.js')

console.log(api);


function processGithubData(data,answers) {
    console.log("processGithubData");
    console.log(data,answers);
    const markDown = generateMarkdown(data,answers);
    writeToFile(markDown);
    console.log(markDown);
}

const questions = [

    {
        type: 'input',
        name: 'githubName',
        message: 'Enter your Github Name?'
    }, {
        type: 'input',
        name: 'Email',
        message: 'Email?'
    }, {
        type: 'input',
        name: 'titleName',
        message: 'Project Title Name?'
    },{
        type: 'input',
        name: 'description',
        message: 'Give a description about your project?'
    }, {
        type: 'input',
        name: 'Installation',
        message: 'Installation for the project?'
    }, {
        type: 'input',
        name: 'Usage',
        message: 'Usage?'
    }, {
        type: 'input',
        name: 'License',
        message: 'License?'
    },  {
        type: 'input',
        name: 'Contributing',
        message: 'Contributing?'
    }, {
        type: 'input',
        name: 'Tests',
        message: 'Tests?'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Where should people direct questions to?'
    },

];

function writeToFile(data) {
  // var jsonString = JSON.stringify(data);
    fs.writeFile('markdown.md', data, function (err) {
        if (err) 
            return console.log(err);
        


    });
}


// fs.writeFile(filename, data, [encoding], [callback])//


inquirer.prompt(questions).then(answers => { // Use user feedback for... whatever!!
    console.log(answers)
    api.getUser(answers.githubName, processGithubData, answers)


    // var file = generateMarkdown (data);
    // fs.writeFile('markdown.txt', file, function (err) {
    // if (err) return console.log(err);
    // console.log('Success > helloworld.txt');
    // });
}).catch(error => {
    if (error.isTtyError) { // Prompt couldn't be rendered in the current environment
    } else { // Something else when wrong
    }
});


