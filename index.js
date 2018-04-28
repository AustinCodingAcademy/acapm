const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });   

   process.argv.forEach(function (val, index, array) {
 console.log(index + ': ' + val);
});

if(process.argv[2] === "init"){
  //do init stuff
  rl.question('Tell me five random facts about youself, please! List them with commas', (fact1, fact2, fact3, fact4, fact5) => {
    console.log(`Thank you.  You will be spared in the uprising.`);
    console.log(`Here is the file we have on you:` )
    rl.close();
   });   
}

var fs = require('fs');
fs.writeFile("mynewfile.txt", "Important Info", (err) => {
   if (err) throw err;
   console.log("The file was succesfully saved!");
});
