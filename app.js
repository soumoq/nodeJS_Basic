//apt-get install node
//apt-get install npm
//npm init
const validator=require('validator'); //npm install validator
const fs=require('fs'); 
const add=require('./util.js');
const add1=add(5,6);
console.log(add1);

fs.writeFileSync('node.txt','I am node js i am gonna eat you')


console.log(validator.isEmail('bat48655@gmail.com'));
console.log(validator.isURL('www.google.com'));

