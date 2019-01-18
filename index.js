"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

const jsonPackage = {
    fileInfo: []
}

rl.question('Type "init" ',(answer)=>{
    let splitAnswer = answer.split(' ');
    if(checkForInit(splitAnswer) && fileDoesNOTExist()){
        saveInputs();
    }else rl.close();
});

function checkForInit(firstWord){
    return firstWord[0] === 'init';
};

function fileDoesNOTExist(){
    return true; //for now
};

// function saveInputs(){
//     rl.question('Give input: ',(answer)=>{
//         jsonPackage.fileInfo.push(answer);
//     });
// }

function saveInputs(){
    rl.question('Give input: ',(a1)=>{
        rl.question('Give input: ',(a2)=>{
            rl.question('Give input: ',(a3)=>{
                rl.question('Give input: ',(a4)=>{
                    rl.question('Give input: ',(a5)=>{
                        jsonPackage.fileInfo.push(a1);
                        jsonPackage.fileInfo.push(a2);
                        jsonPackage.fileInfo.push(a3);
                        jsonPackage.fileInfo.push(a4);
                        jsonPackage.fileInfo.push(a5);
                        createJSONfile();
                    });
                });
            });       
        });
    });
};

function createJSONfile(){
    const stringedInfo = JSON.stringify(jsonPackage.fileInfo)
    var fs = require('fs');
    fs.appendFile("package.json", stringedInfo, (err) => {
        if (err) throw err;
    });
}








// function runInitialInit(){
//     rl.question('Give input',(answer)=>{
//         sendToCreateFile(answer);
//     });     
// };

// function runOtherInits(){
//     rl.question('Give input',(answer)=>{
//         sendToAppendFile(answer);
//     }); 
// };

// function sendToCreateFile(answer){
//     var fs = require('fs');
//     fs.writeFile("package.json", answer, (err) => {
//         if (err) throw err;
//     });
// };

// function sendToAppendFile(answer){
//     let createFile = [];
//     createFile.push(answer);
//     var fs = require('fs');
//     fs.appendFile("package.json", createFile, (err) => {
//         if (err) throw err;
//     });
// }