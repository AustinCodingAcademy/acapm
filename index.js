
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const myJsonData = {
  "name" : "", 
  "from" : "", 
  "color" : "", 
  "team" : "", 
  "beer" : ""
}

const writeMyJson=(data)=>{
  fs.writeFile("package.json", data, (err) => {
    if (err) throw err;
    console.log("The file was succesfully saved!");
  });
}

if(process.argv[2] === "init"){
  rl.question("What is your name? ", (answer) => {
    myJsonData['name'] = answer;
    rl.question("Where are you from? ", (answer) => {
      myJsonData['from'] = answer;
      rl.question("Where are your favorite color? ", (answer) => {
        myJsonData['color'] = answer;
        rl.question("What is your favorite team? ", (answer) => {
          myJsonData['team'] = answer;
          rl.question("What is your fovorite beer? ", (answer) => {
            myJsonData['beer'] = answer;
            rl.close();
            writeMyJson(JSON.stringify(myJsonData, null, 4));
          });
        });
      });
    });
  });
}else{
  console.log("Please type 'node index.js init'");
  process.exit();
}
