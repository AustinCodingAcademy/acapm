#!/usr/bin/env node


const fs = require('fs');
const readline = require('readline');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getPrompt = (messageToUser) => {

  rl.question(messageToUser, (answer) => {
    console.log(answer);
  })

}

if(process.argv[2]==="init"){
  // if (!fs.existsSync("package.json")) {
    const jsonWriteFile = {};
    rl.question("Package name: ", (answer) => {
      jsonWriteFile["Package name"] = answer
      rl.question("Version: ",(answer) => {
        jsonWriteFile["Version"] = answer
        rl.question("Description: ", (answer) => {
          jsonWriteFile["Description"] = answer;
          rl.question("Entry point: " , (answer) => {
            jsonWriteFile["Entry point"] = answer;
            rl.question("Keyword: ", (answer) => {
            jsonWriteFile["Keyword"] = answer;
            rl.close();
            fs.writeFile("package.json", JSON.stringify(jsonWriteFile) , (err) => {
              if (err) throw err;
              console.log("The file was succesfully saved!");
            });            
            })
          })
        })


      })
    })
}

