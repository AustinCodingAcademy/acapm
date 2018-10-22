const fs = require("fs");
const proccessQuestions = require("./questions");

// If init argument is not passed or package.json exists exit proccess
if (process.argv[2] !== "init" || fs.existsSync("package.json")) {
  process.exit();
}

// Questions to proccess
const packageItems = [
  { key: "name", question: "package name: " },
  { key: "version", question: "version: " },
  { key: "description", question: "description: " },
  { key: "main", question: "entry point: " },
  { key: "author", question: "author: " }
];

proccessQuestions(packageItems)
  .then(obj => {
    //  Stringify answers object
    const json = JSON.stringify(obj, null, 2);

    // Write json to package.json
    fs.writeFileSync("package.json", json);

    process.exit();
  })
  .catch(e => {
    console.error("Oops something went wrong!");
  });
