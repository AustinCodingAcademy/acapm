#!/usr/bin/env node
const readline = require('readline');
const async = require("async");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const fs = require('fs');

// if(process.argv[2] === "init"){
//     rl.question('What is your favorite food? ', (food) => {
//         rl.question('What is your favorite color? ', (color) => {
//             rl.question('What is your favorite car? ', (car) => {
//                 rl.question('What is your favorite animal? ', (animal) => {
//                     rl.question('What is your favorite video game? ', (videoGame) => {
//                         const answers = {food, color, car, animal, videoGame};
//                         const obj = JSON.stringify(answers)
//                         fs.writeFile('package.json', obj, (err) => {
//                             if (err) throw err;
//                                 console.log('a new package.json file has been saved')
//                         });
//                         rl.close();
//                     })  
//                 })
//             })
//         })
//     })
// }
const questions = [
    'What is your favorite food? ',
    'What is your favorite color? ',
    'What is your favorite car? ',
    'What is your favorite animal? ',
    'What is your favorite video game? ',
]
// let answers = []
// async.mapSeries(questions, (q, callback) => {
//     console.log('question: ', q)
//     rl.question(q, (answer) => {
//         console.log('answer: ', answer)
//         answers.push(answer)
//         callback(null, answer)
//     })
// }, () => {
//     rl.close();
//     console.log(answers)
//     console.log('done')
// })
