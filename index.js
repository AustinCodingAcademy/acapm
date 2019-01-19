var readline = require('readline');
var fs = require('fs');

if(process.argv[2] === "init") {
    console.log('init');
} else {
    process.exit();
};

fs.stat('./package.json', function(err) {  
    if (err) {
        console.log('file does not exist')
    } else {
        process.exit();
    }
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('package name: ', (answer1) => {
    rl.question('version: ', (answer2) => {
        rl.question('description: ', (answer3) => {
            rl.question('entry point: ', (answer4) => {
                rl.question('author: ', (answer5) => {
                    
                })
            })
        })
    })
    // rl.close();
});

// fs.writeFile('package.json', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });