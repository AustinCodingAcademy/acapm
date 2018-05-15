const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });   

   process.argv.forEach(function (val, index, array) {
 console.log(index + ': ' + val);
});

const userFacts = {
    "fact one" : "",
    "fact two" : "",
    "fact three" : "",
    "fact four" : "",
    "fact five" : "",   
};

const userPrompts = ["Fact 1: ", "Fact 2: ", "Fact 3: ", "Fact 4: ", "Fact 5: "];

const contentOfJson = (facts) => {
    fs.writeFile("package.json", data, (err) => {
        if(err) throw (err);
        console.log ("Thank you for your submission.  You will be spared in the uprising.")
    });
};

const askUser = (i) {
//Check to see if the user has input all entries
if(i<=Object.keys(userFacts).length) {
    if(process.argv[2] === "init"){

    }   
}
}
//initialize

//still need to get the inputs in an object, currently just in a string
//function getPrompt()
//make a recursive function - a function that calls itself

// const getPrompt = () => {
//     rl.question('tell me something about yourself', (anser) => {
//         myJsonData['fact'] = answer;
//         getPrompt();
//     })
// }