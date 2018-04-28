// Create a node program
// Check for the first process argument to be init
// If the first argument is init continue processing
// Use readline to ask for 5 inputs
// Create a string that is a json object
// The key values should be the inputs you get from the user
// Save this json to a file called package.json
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

console.log(process.argv);
process.argv.forEach(function (val, index, array) {
 console.log(index + ': ' + val);
});



if(process.argv[2] === "init"){
  (rl.question(`App name? `, (answer1) => {
    rl.question(`Description? `, (answer2) => {
      rl.question(`Release Version? `, (answer3) => {
        rl.question(`Author? `, (answer4) => {
          rl.question(`Main file path? `, (answer5) =>{
            const response = {
              'name': answer1,
              'description': answer2,
              'version': answer3,
              'author': answer4,
              'main': answer5
            }
            const obj = JSON.stringify(response, null, '\t')
            fs.writeFile('package.json', obj, (err) => {
              if (err) throw err;
                console.log('A new package.json file has been saved');
            });
            rl.close()
          })
        })
      })
    }
  )}
))
}

