const fs = require('fs');
const readline = require('readline');

const option = process.argv[2];
const options = ['init', 'help'];
const optionHandlers = {
  init: init,
  help: help,
};

// if no option swas specified, show help message and exit
if (!optionHandlers[option]) {
  console.log('Please specify one of the following options: \n');
  help();
  process.exit(0);
}

// call option handler
optionHandlers[option]();

function help() {
  console.log('  init - inits an object based on a few questions');
  console.log('  help - prints this help message');
}

function init() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answers = {};

  prompt(rl, 'Package name: ')
    .then((answer) => {
      answers['name'] = answer;
    })
    .then(() => {
      return prompt(rl, 'version: ').then((answer) => {
        answers['version'] = answer;
      });
    })
    .then(() => {
      return prompt(rl, 'description: ').then((answer) => {
        answers['description'] = answer;
      });
    })
    .then(() => {
      return prompt(rl, 'entry point: ').then((answer) => {
        answers['main'] = answer;
      });
    })
    .then(() => {
      return prompt(rl, 'test command: ').then((answer) => {
        answers['test'] = answer;
      });
    })
    .then(() => {
      console.log();
      console.log("Here's your object: ");
      console.log(answers);
      rl.close();
      writeFile(answers);
    });
}

function prompt(rl, prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function writeFile(answers) {
  const json = JSON.stringify(answers, null, 2);
  fs.writeFile('aca-package.json', json, 'utf8', () => {
    console.log('aca-package.json created.');
  });
}
