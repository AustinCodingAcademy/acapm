#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if(process.argv[0] === "init"){
    //do init stuff
   console.log("I am doing init stuff");
  }

// rl.question('What do you want to do? ', (answer) => {
//   if (answer === 'init'){
//       console.log('Creating package.json');
//       fs.writeFile("package.json", "important info")
//   } else {
//       console.log('error')
//   }
//   rl.close();
// });