const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });   

//    process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
// });

const userFacts = {
    "fact one" : "",
    "fact two" : "",
    "fact three" : "",
    "fact four" : "",
    "fact five" : "",   
};

const userPrompts = ["Fact 1: ", "Fact 2: ", "Fact 3: ", "Fact 4: ", "Fact 5: "];

const robotFile = (facts) => {
    fs.writeFile("package.json", facts, (err) => {
        if(err) throw (err);
    });
    console.log ("Thank you for your submission.  You will be spared in the uprising.")
};

const askUser = (i) => {
    //check to see if the user has input all of their facts
    if (i <= Object.keys(userFacts).length){
        //initialize
        if (process.argv[2] === 'init'){
            //ask the user for each fact
            rl.question(userPrompts[i], (newFact)=>{
                userFacts[Object.keys(userFacts)[i]] = newFact;
                return askUser(i+1)
            })
        //once the user has input each fact
        } if (i == Object.keys(userFacts).length) {
            //stop the readline function
            rl.close();
            //make the json file
            robotFile(JSON.stringify(userFacts, null, 4))
        }
    } else {
        //exit the whole thing
        process.exit();
    }
}
//run the function
askUser(0)