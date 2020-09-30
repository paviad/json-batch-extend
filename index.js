#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { program } = require('commander');


// First argument is the template json file path
let templatePath;

// Second argument is the directory with the parameter json files
let parametersDir;

// Third argument is the directory where the output files will be written
let outputDir;

program
    .version('1.0.0')
    .arguments('<template> <paramDir> <outDir>')
    .action(function (a1, a2, a3) {
        templatePath = a1;
        parametersDir = a2;
        outputDir = a3;
    })
    .parse(process.argv);

// Read a list of all parameter json files
const parameterFiles = fs.readdirSync(parametersDir);

// Read the template json file and parse it
const templateObject = JSON.parse(fs.readFileSync(templatePath));

console.log('Template object', templateObject);
console.log('===========');

// Loop over each parameter file
parameterFiles.forEach(x => {

    // Set the parameter file path
    const inputPath = path.join('.', parametersDir, x);

    // Set the output file path
    const outputPath = path.join('.', outputDir, x);

    // Read the parameter file and parse it
    const parameterObject = JSON.parse(fs.readFileSync(inputPath));

    console.log(`Parameter ${x}`, parameterObject);

    // Create the output object by using the template object first, and then
    //   applying all the values in the parameter object
    const outputObject = {
        ...templateObject,
        ...parameterObject,
    }

    console.log('Output object', outputObject);
    console.log('-----------');

    // Write the output object to the output directory,
    //   with the same name as the parameter file name
    fs.writeFileSync(outputPath, JSON.stringify(outputObject));
});
