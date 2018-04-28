// Create a node program x
// Check for the first process argument to be init x
// If the first argument is init continue processing x
// Use readline to ask for 5 inputs x
// Create a string that is a json object x
// The key values should be the inputs you get from the user x
// Save this json to a file called package.json x
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(process.argv)

process.argv[2]==='init' 
    ? (rl.question(`App name? `, (name) => {
        rl.question(`Description? `, (desc) => {
          rl.question(`Release version? `, (version) => {
            rl.question(`Author? `, (author) => {
              rl.question(`Main file path? `, (main) => {
                const response = {
                  'name' : name,  
                  'description' : desc, 
                  'version' : version,
                  'author' : author,
                  'main' : main
                }
                const obj = JSON.stringify(response, '', '\t')
                fs.writeFile('package.json', obj, (err) => {
                  if (err) throw err;
                  console.log('A new package.json file has been saved');
                });
                rl.close()
              })
            })
          })
        })
      })
    )
    : console.log(`Did you mean to input init? \n\n try: \t node index.js init \n`)

