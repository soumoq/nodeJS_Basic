//apt-get install node
//apt-get install npm
//npm init
//npm install nodemon
//run nodenom => nodenom app.js
const validator=require('validator'); //npm install validator
const yargs=require('yargs');
const chalk=require('chalk');
const fs=require('fs'); 
const add=require('./util.js');
const add1=add(5,6);
console.log(add1);

fs.writeFileSync('node.txt','I am node js i am gonna eat you');


console.log(validator.isEmail('bat48655@gmail.com'));
console.log(validator.isURL('www.google.com'));
const greenMsg=chalk.red('Error!');
console.log(greenMsg);


console.log(process.argv[0]);//commend line argument
console.log(yargs.argv);
