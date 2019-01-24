'use strict';
const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




// console.log(process.argv);
// process.argv.forEach(function (val, index, array) {
//  console.log(`${index} ${val}`);
// });



// Check for the first process argument to be init
if(process.argv[2] === "init"){
  // * Use readline to ask for 5 inputs
  (rl.question(`Package name? `, (answer1) => {
    rl.question(`Version? `, (answer2) => {
      rl.question(`Description? `, (answer3) => {
        rl.question(`License? `, (answer4) => {
          rl.question(`Author? `, (answer5) =>{

            const jsonPackage = {
              'name': answer1,
              'version': answer2,
              'description': answer3,
              'license': answer4,
              'author': answer5
            }
            const obj = JSON.stringify(jsonPackage,null, '\t' );
            // Using a tab character mimics standard pretty-print appearance
            // If this value is null or not provided, all properties of the object are included in the resulting JSON string.


            // The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, 
            // a new file, containing the specified content, will be created:
            fs.writeFile('package.json', obj, (err) => {
              if (err) throw err;
                console.log("You're information has been stored");
            });
            rl.close()
          })
        })
      })
    }
  )}
))

}else{
 process.exit();

} //if init isnt the first process arg
