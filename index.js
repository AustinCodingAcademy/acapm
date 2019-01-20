#!/usr/bin/env node
const readline = require('readline');
var waterfall = require("async/waterfall");

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


// waterfall([
//     function(callback) {
//         rl.question('What is your favorite food1? ', (answer) => {
//             callback(null, answer)
//         })
//     },
//     function(answer, callback) {
//         rl.question('What is your favorite food2? ', (answer) => {
//             callback(null, answer)
//         })
//     },
//     function(arg1, callback) {
//         rl.question('What is your favorite food3? ', (answer) => {
//             callback(null, answer)
//         })
//     }
// ], function (err, result) {
//     console.log(result)
// });
