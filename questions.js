const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// returns rl.question as a promise
function getAnswer(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

//  Pass in an array of objects shaped like
//  {key: "keyname", question: "question to ask"}
//  Prompts user each question and returns an object
//  with the answers matching their coordinating keys
async function proccessQuestions(items) {
  // Empty objec to be filled with answers
  const packageObject = {};

  // Loop through the array of questions
  for (const item of items) {
    // awaits question answer before continuing the array
    const answer = await getAnswer(item.question);

    // Add key/answer to the packageObject
    packageObject[item.key] = answer;
  }

  // return object of answers
  return packageObject;
}

module.exports = proccessQuestions;
