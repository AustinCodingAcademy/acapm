

let jsonObject = {
    'name': '',
    'age': '',
    'favoriteBand': '',
    'favoriteAuthor': '',
    'meaningOfLife': '',
}

const createJson =(jsonObject)=> {
   
    var fs = require('fs');
    fs.writeFile("package.json", JSON.stringify(jsonObject), (err) => {
       if (err) throw err;
   
    });
}


const createPrompts =()=> {

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    rl.question('What is your name? ', (answer) => {
        jsonObject.name = answer
        rl.question('What is your age? ', (answer) => {
            jsonObject.age = answer
            rl.question('What is your favorite band? ', (answer) => {
                jsonObject.favoriteBand = answer
                rl.question('What is your favorite author? ', (answer) => {
                    jsonObject.favoriteAuthor = answer
                    rl.question('What is the meaning of life? ', (answer) => {
                        jsonObject.meaningOfLife = answer
                            createJson(jsonObject);
                            rl.close();
                        });
                    });
                });
            });
        });
}
                            



   
if(process.argv[2] === "init"){
    createPrompts();
}

   
