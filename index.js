#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const fs = require('fs');

if(process.argv[2] === "init"){
    rl.question('What is your favorite food? ', (food) => {
        rl.question('What is your favorite color? ', (color) => {
            rl.question('What is your favorite car? ', (car) => {
                rl.question('What is your favorite animal? ', (animal) => {
                    rl.question('What is your favorite video game? ', (videoGame) => {
                        const answers = {food, color, car, animal, videoGame};
                        const obj = JSON.stringify(answers)
                        fs.writeFile('package.json', obj, (err) => {
                            if (err) throw err;
                                console.log('a new package.json file has been saved')
                        });
                        rl.close();
                    })  
                })
            })
        })
    })
}
