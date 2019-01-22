#!/usr/bin/env node

console.log(process.argv);
process.argv.forEach(function(val, index, array){
    console.log(index + ':' + val);
});

const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

const fs=require('fs');

if(process.argv[2] === 'init'){
    rl.question('Where would you like to travel to? ', (answer1) => {
    console.log(`Thank you for your valuable feedback: ${answer1}`);
        rl.question('What is your favorite food? ', (answer2) => {
            console.log(`Thank you for your valuable feedback: ${answer2}`);
                rl.question('Where were your born? ', (answer3) => {
                console.log(`Thank you for your valuable feedback: ${answer3}`);
                     rl.question('What is your favorite color? ', (answer4) => {
                     console.log(`Thank you for your valuable feedback: ${answer4}`);
                        rl.question('How old are you? ', (answer5) => {
                        console.log(`Thank you for your valuable feedback: ${answer5}`);
                        const answers = {
                            answer1,
                            answer2,
                            answer3,
                            answer4,
                            answer5
                        }
                        const objects = JSON.stringify(answers)
                        fs.writeFile('package.json', objects, (err)=>{
                            if (err)throw err;
                            console.log('a new package.json file has been saved.')
                        })
                        rl.close();
                    });
                });
            });
        });
    });
};

