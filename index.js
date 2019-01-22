// console.log(process.argv);
// process.argv.forEach(function(val, index, array) {
//   console.log(index + ": " + val);
// });

// checking for first arg
if (process.argv[2] === "init") {
  // check to see if package.json already exists, else exit program
  // prompt questions
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askQuestion() {
    rl.question("Project Name: ", answer => {
      rl.question("Author Name: ", answer => {
        rl.question("Version: ", answer => {
          rl.question("ID: ", answer => {
            rl.question("Favorite Color: ", answer => {
              console.log("Prompts completed.");
            });
          });
        });
      });
      askQuestion();
    });
  }
  askQuestion();
}
// if first arg is not "init", exit the program

// writing file
// let fs = require("fs");

// fs.writeFile("myNewFile.txt", "Important Info", err => {
//   if (err) throw err;
//   console.log("The file was successfully saved!");
// });

// reading file
// const fs = require("fs");

// fs.readFile("myNewFile.txt", "utf8", fileWasRead);

// function fileWasRead(err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// }
