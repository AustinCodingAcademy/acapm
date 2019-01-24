//This allows users to enter input information.
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//If the length of the input is 3 words, start listing questions. After 
//each answer, list the next question.
if(process.argv.length === 2) {
console.log ('Answer the following:')

 rl.question('First Name: ', (r1) => {
  rl.question('Last Name: ', (r2) => {
    rl.question('Email: ', (r3) => {
      rl.question('Phone Number: ', (r4) => {
        rl.question('Address: ', (r5) => {

          //responses stored into variable "responses"
          let responses = {  
               r1, r2, r3, r4, r5,
           };

//after all questions are answered, end program and send responses as a string
//that is a JSON object to a new file called Package2.json)
          rl.close();
          let data = JSON.stringify(responses);  
          fs.writeFileSync('package2.json', data);  
          console.log('Added data to: Package2.json');
          
        }) 
      })
    })
  })
 })
} else {
  console.log('Error: Enter ("npm run init")');
  rl.close();
};