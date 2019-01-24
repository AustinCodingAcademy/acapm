#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if(process.argv[2] === "init"){
  if (!fs.existsSync("./package.json")){
    console.log("Get ready to init!");
    rl.question('What is your name? ', (name) => {
      rl.question('What is your e-mail address? ', (email) => {
        rl.question('What is your username? ', (username) => {
          rl.question('What is your password? ', (password) => {
            rl.question('What is your favorite color? ', (color) => {
              let answers = {  
                name: name,
                email: email, 
                username: username,
                password: password,
                color: color
              };
              console.log("Created new package.JSON file:");
              console.log(answers);
            let data = JSON.stringify(answers);  
            fs.writeFileSync('package.json', data);  
              rl.close();
            }) 
          })
        })
      })
    })
 } else {
  console.log("error")
  rl.close();
  }
};