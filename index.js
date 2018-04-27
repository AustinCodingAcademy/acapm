// Create a node program x
// Check for the first process argument to be init x
// If the first argument is init continue processing x
// Use readline to ask for 5 inputs x
// Create a string that is a json object 
// The key values should be the inputs you get from the user
// Save this json to a file called package.json
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


process.argv[2]==='init' 
    ? (rl.question(`What is your yearly income? `, (answer1) => {
        rl.question(`How much do you spend on groceries? `, (answer2) => {
          rl.question(`How much do you spend on gas? `, (answer3) => {
            rl.question(`How much do you spend on rent? `, (answer4) => {
              rl.question(`How much do you spend on entertainment? `, (answer5) => {
                const response = {
                  'salary' : answer1, 
                  'groceries' : answer2, 
                  'gas' : answer3,
                  'rent' : answer4,
                  'entertainment' : answer5
                }
                const obj = JSON.stringify(response)
                fs.writeFile('message.json', obj, (err) => {
                  if (err) throw err;
                  console.log('The file has been saved!');
                });
                rl.close()
              })
            })
          })
        })
      })
    )
    : console.log(`Did you mean to input init? \n\n try: \t node index.js init \n`)

