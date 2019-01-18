const fs = require('fs');
fs.writeFile("mynewfile.txt", "Important Info", (err) => {
   if (err) throw err;
   console.log("The file was succesfully saved!");
});
