"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

rl.question('',(answer)=>{
    let splitAnswer = answer.split(' ');
    if(checkForInit(splitAnswer)){
        runInit();
    }else rl.close();
});

// var fs = require('fs');
// fs.writeFile("mynewfile.txt", "Important Info", (err) => {
//    if (err) throw err;
//    console.log("The file was succesfully saved!");
// });


const checkForInit=(firstWord)=>{
    return firstWord[0] === 'init';
};

const runInit = ()=>{
    for(let i=0;i<6;i++){
        rl.question('Give input',(answer[i+1])=>{
            //${answer}
            //node step by step slide 29
        });
    }    
};
