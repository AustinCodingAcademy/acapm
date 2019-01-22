// checking for first arg
if (process.argv[2] === "init") {
  // prompt questions
  const readline = require("readline");
  const fs = require("fs");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askQuestion() {
    rl.question("Project Name: ", name => {
      rl.question("Author Name: ", author => {
        rl.question("Version: ", version => {
          rl.question("ID: ", id => {
            rl.question("Favorite Color: ", color => {
              // saved responses in JSON object
              const response = {
                "Project Name": name,
                "Author Name": author,
                "Version": version,
                "ID": id,
                "Favorite Color": color
              };
              // JSON object converted to string and new package created
              const obj = JSON.stringify(response, "", "\t")
              fs.writeFile("package.json", obj, (err) => {
                if (err) throw err;
                console.log("The file was successfully saved!");
              });
              rl.close();
            });
          });
        });
      });
      askQuestion();
    });
  }
  askQuestion();
}
