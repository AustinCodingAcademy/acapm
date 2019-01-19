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
    if(answer === 'init' && fileDoesNOTExist()){
        sendToJSON();
    }else rl.close();
});

function fileDoesNOTExist(){
    return true; //for now
};

function sendToJSON(){
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
                        rl.close();
                    });
                });
            });       
        });
    });
};

function createJSONfile(){
    const stringedInfo = JSON.stringify(jsonPackage)
    var fs = require('fs');
    fs.appendFile("package.json", stringedInfo, (err) => {
        if (err) throw err;
    });
}
