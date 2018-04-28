const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
process.argv[2] === 'init'
    ? (rl.question('Package Name? ', (answer1) => { rl.write('1.0.0')
        rl.question('Version? ', (answer2) => {
            rl.question('Description? ', (answer3) => {
                rl.question('Author? ', (answer4) => {
                    rl.question('Keywords? ', (answer5) => {
                        const response = {
                            'name':  answer1,
                            'version': answer2,
                            'description': answer3,
                            'author': answer4,
                            'keywords': answer5
                        }
                        const obj = JSON.stringify(response, '', '\t')
                        fs.writeFile('package.json', obj, (err) => {
                            if (err) throw err;
                            console.log('A new package.json file has been created.  Have a nice day!')
                        });
                        rl.close();
                    })
                })
            })
        })
    })
)
  :console.log(`Did you mean to input init? \n\n try: \t node index.js init`);
 
