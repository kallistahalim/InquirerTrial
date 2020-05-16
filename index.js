var inquirer = require('inquirer');

var questions = [
    {
        type: 'confirm',
        name: 'canAsk?',
        message: 'Can I ask you few questions?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What\'s your name?'
    },
    {
        type: 'checkbox',
        name: 'food',
        message: 'What do you want to eat?',
        choices: [
            new inquirer.Separator('The Meat'),
            {
                name: 'bacon'
            },
            {
                name: 'pepperoni'
            },
            {
                name: 'turkey'
            },
            {
                name: 'ham'
            },
            new inquirer.Separator('The Vegetables'),
            {
                name: 'kale'
            },
            {
                name: 'spinach'
            },
            {
                name: 'lettuce'
            },
            {
                name: 'carrot'
            }
        ]
    },
    {
        type: 'password',
        name: 'password',
        message: 'Compose a password'
    }
];

inquirer
  .prompt(questions)
  .then(answers => {
        console.log(JSON.stringify(answers, null, ''));
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log(error);
    } else {
      console.log("Something is wrong");
    }
  });
