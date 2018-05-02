
// Let's create our own package manager

// Create a node program
// Check for the first process argument to be init
// If the first argument is init continue processing
// Use readline to ask for 5 inputs
// Create a string that is a json object
// The key values should be the inputs you get from the user
// Save this json to a file called package.json

// Bonus
// Don't hardcode the readlines
// Don't use a loop
// Don't using string concatenation or template literals

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

const jsonData = {
    "firstName" : "",
    "lastName" : "",
    "emailAddress" : "",
    "phoneNumber" : "",
    "whatWant" : "",
}

const writeJsonObj = (data) => {
    fs.writeFile("package.json", data, (err) => {
        if(err) throw err;
        console.log("The file was successfully created")
    })
}


const getAnswers = (n) => {
    if (n<Object.keys(jsonData).length){
        if(process.argv[2]==='init'){
            rl.question(`${Object.keys(jsonData)[n]}: `, (answer)=>{
                jsonData[Object.keys(jsonData)[1]] = answer;
                return getAnswers(n+1)
            })
        } if(n == Object.keys(jsonData).length) {
            rl.close();
            writeJsonObj(JSON.stringify(jsonData, null, 4))
        }
    } else {
        process.exit();
    }
}
getAnswers(0)
