
const readline = require('readline');
const fs = require('fs');
const path = './package.json'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function that checks if JSON file 'package.json' exists
const checkForNoJson = () => {;
    return !fs.existsSync(path);
}


// function to check if users first input is init
const checkForInit = (init) => {
    return init === 'init';
}

// function that stores two objects(questions, user answers), and includes a recursive function that asks the user 5 questions
const askQuestionsGetAnswers = () => {
   
    // object to ask questions 
    const questions = {
        question1: 'Name?: ',
        question2: 'Gender?: ',
        question3: 'Religous affiliation?: ',
        question4: 'Burdesome Secret?: ',
        question5: 'Cartoon Character lookalike?: '
    }

    // object to store user answers for JSON File
        const answers = {
            answer1: null,
            answer2: null,
            answer3: null,
            answer4: null,
            answer5: null,
        }

    // variables declared for recursive function to ask question using rl.question and store the answer
    let i = 0;  
    const questionArr = Object.values(questions);
    const answersArr = Object.keys(answers);

    // recursive function
    const typeQuestion = (questionArr, answersArr, i) => { 
        rl.question(questionArr[i], (answer) => {
            answers[answersArr[i]] = answer;
            if (i >= '4') {
                writeJSONfile(answers);
            } else {
                i++;
                typeQuestion(questionArr, answersArr, i);
            }
        })
    }

    typeQuestion(questionArr,answersArr, i);
}

// Creates JSONfile based upon users answers to questions.  Its called within the recursive function typeQuestion
const writeJSONfile = (answers) => {
    const answersToJSON = JSON.stringify(answers);
    fs.writeFile(path,answersToJSON, (err) => {
        if (err) throw err;
        console.log('Saved information');
        rl.close();
    })
 }


rl.question('', (init) => {
    if(checkForInit(init)) {
        if(checkForNoJson()) {
            askQuestionsGetAnswers();
        } else {
            rl.close();
        }
    } else {
        rl.close();
    }   
  });