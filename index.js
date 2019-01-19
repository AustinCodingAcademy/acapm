var readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const jsonObj = {};

//checks if init is first arg
if(process.argv[2] === "init") {
    //fs.stat fetches info on a file but if it doesnt exist i can use the error to continue  
    fs.stat('./package.json', function(err) {  
        if (err) {
            // console.log('file does not exist')
            rl.question('package name: ', (answer) => {
                jsonObj['packageName'] = answer;
                rl.question('version: ', (answer) => {
                    jsonObj['version'] = answer;
                    rl.question('description: ', (answer) => {
                        jsonObj['description'] = answer;
                        rl.question('entry point: ', (answer) => {
                            jsonObj['entryPoint'] = answer;
                            rl.question('author: ', (answer) => {
                                jsonObj['author'] = answer;
                                console.log(jsonObj);
                                saveFile();
                                rl.close();
                            })
                        })
                    })
                })
            });
        } else {
            process.exit();
        }
    });
} else {
    process.exit();
};

function saveFile() {
    //fs.writefile requires data as a string
    const string = JSON.stringify(jsonObj);
    fs.writeFile('package.json', string, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

