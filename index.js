#!/usr/bin/env node
//use strict;
 

const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

const fs = require('fs');
const questions = ['What do you think of Node.js? ', 'What do you think of computer class? ', 'What do you think of basketball? ', 'What do you think of pizza? ', 'What do you think of beer? '];
const answers = [];

if(process.argv[2] === 'init'){
    rl.question('What do you think of Node.js? ', (answer) => {
        rl.question('What do you think of computer class? ', (answer2) => {
            rl.question('What do you think of basketball ', (answer3) => {
                rl.question('What do you think of pizza? ', (answer4) => {
                    rl.question('What do you think of beer? ', (answer5) => {
                        const jsonObject = {
                            answer, 
                            answer2, 
                            answer3, 
                            answer4,
                            answer5
                        }
                        const printedObject = JSON.stringify(jsonObject);
                        fs.writeFile('package.json', printedObject, (err) => {
                        if (err) throw err;
                        console.log('Thank you for your valuable feedback: a new package.json file has been saved.')
                        })
                            rl.close();
                    })
                })
            })
        })
    })
}

// console.log(process.argv);
// process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
// });

// if(process.argv[2] === "init"){
//   //do init stuff
//  console.log("I am doing init stuff");
// } else {
//     process.exit();
// }
// if(package.json) {
//     process.exit();
// }
// if(process.argv[2] === "install"){
// console.log("I am doing install stuff");
// }
// if(process.argv[2] === "public"){
// console.log("I am doing public stuff");
// }
