const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = {};

rl.question('Please enter "npm init": ', (npmInit) => {
    if (npmInit !== 'npm init') {
        process.exit();    
    }
    if (fs.existsSync("./package.json")) {
        process.exit();    
    }
    
    rl.question('Please enter 5 numbers. Number 1: ', (num1) => {
        numbers.number1 = num1;
        rl.question('Number 2: ', (num2) => {
            numbers.number2 = num2;
            rl.question('Number 3: ', (num3) => {
                numbers.number3 = num3;
                rl.question('Number 4: ', (num4) => {
                    numbers.number4 = num4;
                    rl.question('Number 5: ', (num5) => {
                        numbers.number5 = num5;
                        fs.writeFileSync("package.json", JSON.stringify(numbers, null, 2));
                        return rl.close();
                    })
                })
            })

        })
    })
})





   
          