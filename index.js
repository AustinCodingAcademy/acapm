var readline = require('readline');
var fs = require('fs');

if(process.argv[2] === "init") {
    console.log('init');
} else {
    process.exit();
}


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });