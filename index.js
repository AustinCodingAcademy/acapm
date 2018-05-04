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
    "fact one": "this.fact1",
    "fact two": "this.fact2",
    "fact three": "this.fact3",
    "fact four": "this.fact4",
    "fact five": "this.fact5",   
}

if(process.argv[2] === "init"){
    //do init stuff
    rl.question('Tell me five random facts about youself, please! Separate them with commas', (fact1, fact2, fact3, fact4, fact5) => {
        console.log(`Thank you.  You will be spared in the uprising.`);
        rl.close();
        var fs = require('fs');
    fs.writeFile("package.txt", JSON.stringify(fact1, fact2, fact3, fact4, fact5), (err) => {
        if (err) throw err;
        console.log("Here is the file we have on you.");
        });
   });   
}

//still need to get the inputs in an object, currently just in a string
//function getPrompt()
//make a recursive function - a function that calls itself

// const getPrompt = () => {
//     rl.question('tell me something about yourself', (anser) => {
//         myJsonData['fact'] = answer;
//         getPrompt();
//     })
// }