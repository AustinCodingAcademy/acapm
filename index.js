"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

const jsonPackage = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
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
                        jsonPackage.input1 = a1;
                        jsonPackage.input2 = a2;
                        jsonPackage.input3 = a3;
                        jsonPackage.input4 = a4;
                        jsonPackage.input5 = a5;
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
