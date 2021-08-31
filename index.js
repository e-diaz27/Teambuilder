const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// How do I make the prompt run indefinitely until the user wants me to stop?

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id?',
    },
    {
      type: 'email',
      name: 'id',
      message: 'What is the employee email?',
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is employee role?',
      choices: [Manager, Engineer, Intern];
    },

// Is this syntax correct? How do I ask role-specific questions?
// How do I connect my questions to my classes? How do I create new objects?

  ]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Employee name: ${answers.name}</h1>
    <p class="lead">Role: ${answers.role}.</p>
    <p class="lead">Id: ${answers.id}.</p>
    <p class="lead">Email: ${answers.email}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
    </ul>
  </div>
</div>
</body>
</html>`;

// How can I make multiple containers for each employee?
// How do I add employee specific information?

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();