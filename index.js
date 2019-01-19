const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter "npm init": ', (npmInit) => {
    if (npmInit !== 'npm init') {
        process.exit();    
    }
    if (fs.existsSync("./package.json")) {
        process.exit();    
    }
    
    rl.question('Please enter 5 numbers: ', (nums) => {
        console.log(`${nums}`);
    })
})




   
          