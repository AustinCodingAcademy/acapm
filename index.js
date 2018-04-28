// ## Let's create our own package manager

// * Create a node program
// * Check for the first process argument to be init
// * If the first argument is init continue processing
// * Use readline to ask for 5 inputs
// * Create a string that is a json object
// * The key values should be the inputs you get from the user
// * Save this json to a file called package.json

// # Bonus
// * Don't use a loop

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.argv[2]==='init'
    ? (rl.question('App Name? ', (name) => { 
        rl.write('1.0.0'), rl.question('Version? ', (version) => {
            rl.question('Description? ', (description) => {
                rl.question('Author? ', (author) => {
                    rl.question('File Path? ', (filepath) => {
                        const response = {
                            'Name': name,
                            'Version': version,
                            'Description': description,
                            'Author': author,
                            'File Path': filepath
                        }
                        const obj = JSON.stringify(response, '', '\t')
                        fs.writeFile('package.json', obj, (err) => {
                            if (err)  throw err;
                            console.log('A new package.json file has been saved');
                        });
                        rl.close()
                    })
                })
            })
        })
    })
    )
: console.log("Did you mean to put input init? \n \n try: \t node. index.js init")

    // rl.question('What do you think of Node.js? ', (answer) => {
    //   // TODO: Log the answer in a database
    //   console.log(`Thank you for your valuable feedback: ${answer}`)