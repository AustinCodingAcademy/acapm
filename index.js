const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var path = './package.json';
var fs = require('fs');

var userInputs = {inputs : []};

let val = '';

for (let index = 2; index < process.argv.length; index++) {

    val = process.argv[index];

    if (val != 'init') {
        console.log('Terminating the program...');
        process.exit();
    }
    else {
        if (fs.existsSync(path)) {
            console.log('Terminating the program...');
            process.exit();
        }
        else {
            console.log("Please type in 5 commands...");
            let commandCounter = 0;

            rl.on('line', (input) => {
                userInputs.inputs.push({key: commandCounter, value: input});   
                if (commandCounter == 4) {
                    let jsonString = JSON.stringify(userInputs);

                    fs.writeFile('package.json', jsonString, 'utf8', function(err) {
                        if (err) {
                            return console.log(err);
                        }
                    });
                    rl.close();
                }
                commandCounter += 1;
            });
 
        }
    }
}


