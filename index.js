// Create a node program x
// Check for the first process argument to be init x
// If the first argument is init continue processing <---------
// Use readline to ask for 5 inputs
// Create a string that is a json object
// The key values should be the inputs you get from the user
// Save this json to a file called package.json
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const response = []

process.argv[2]==='init' 
    ? (rl.question(`What is your yearly income? `, (answer1) => {
        rl.question(`How much do you spend on groceries? `, (answer2) => {
          rl.question(`How much do you spend on gas? `, (answer3) => {
            rl.question(`How much do you spend on rent? `, (answer4) => {
              rl.question(`How much do you spend on entertainment? `, (answer5) => {
                response.push(answer1, answer2, answer3, answer4, answer5)
                console.log(response)
                rl.close()
              })
            })
          })
        })
      })
    )
    : console.log(`Did you mean to input init? \n\n try: \t node index.js init \n`)

