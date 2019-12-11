
'use strict';


//checking if first process arg is "init"
if(process.argv[2] === "init") {
const fs = require('fs');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout  
});



// console.log(process.argv)

// const jsonObj = {}
// if(process.argv[2] === "init") {
  // console.log(process.argv[2])
rl.question("input number 1 ", (input1) => {
  rl.question("input number 2 ", (input2) => {
    rl.question("input number 3 ", (input3) => {
      rl.question("input number 4 ", (input4) => {
        rl.question("input number 5 ", (input5) => {
          console.log(`${input1},${input2},${input3},${input4},${input5},`)
          const obj = `{
            "input1" : ${input1},
            "input2" : ${input2},
            "input3" : ${input3},
            "input4" : ${input4},
            "input5" : ${input5},
          }`
          const jsonString= JSON.stringify(obj);
          fs.writeFile("package.json", jsonString, function (err) {
            if (err) throw err;
            console.log('Already Saved!');
          })

          return rl.close()
        })
      })
    })
  }) 
})
}

