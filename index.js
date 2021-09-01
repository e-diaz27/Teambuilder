const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// How do I make the prompt run indefinitely until the user wants me to stop?

const team = [];

const questionsAdd = [{
  type: 'list',
  name: 'choice',
  message: 'Which employee do you wanna add?',
  choices: ["Manager", "Engineer", "Intern", "No mOre"]
}]

const questionIntern = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the intern id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the intern school?',
  }
]

const questionManager = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Manager name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the Manager id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Manager email?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the Manager officeNumber?',
  }
]

const questionEngineer = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Engineer name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the Engineer id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Engineer email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the Engineer github?',
  }
]

const createManager = () => {
  //ask the question and get the answer
  inquirer.prompt(questionManager).then((answers) => {
    //create instance of Manager
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    //add the Manager teams array
    team.push(newManager)
    addMember();
  });
}

const createIntern = () => {
  //ask the question and get the answer
  inquirer.prompt(questionIntern).then((answers) => {
    //create instance of Intern
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
    //add the Intern teams array
    team.push(newIntern)
    addMember();
  });
}

const createEngineer = () => {
  //ask the question and get the answer
  inquirer.prompt(questionEngineer).then((answers) => {
    //create instance of Engineer
    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    //add the Engineer teams array
    team.push(newEngineer)
    addMember();
  });
}

const endGame = () => {
  let template = "";

  team.forEach((mem) => {
    switch (mem.getRole()) {
      case "Manager":
        template+= `
        <div class="container">
          <h1 class="display-4">Manager name: ${mem.getName()}</h1>
          <p class="lead">Role: ${mem.getRole()}.</p>
          <p class="lead">Id: ${mem.getId()}.</p>
          <p class="lead">Email: ${mem.getEmail()}.</p>
          <p class="lead">OfficeNumber: ${mem.getOfficeNumber()}.</p>
        </div>
        `;
        break;
        case "Intern":
          template+= `
          <div class="container">
            <h1 class="display-4">Intern name: ${mem.getName()}</h1>
            <p class="lead">Role: ${mem.getRole()}.</p>
            <p class="lead">Id: ${mem.getId()}.</p>
            <p class="lead">Email: ${mem.getEmail()}.</p>
            <p class="lead">School: ${mem.getSchool()}.</p>
          </div>
          `;
          break;
          case "Engineer":
            template+= `
            <div class="container">
              <h1 class="display-4">Engineer name: ${mem.getName()}</h1>
              <p class="lead">Role: ${mem.getRole()}.</p>
              <p class="lead">Id: ${mem.getId()}.</p>
              <p class="lead">Email: ${mem.getEmail()}.</p>
              <p class="lead">github: ${mem.getGithub()}.</p>
            </div>
            `;
            break;
      default:
        break;
    }
  });

  const finalhtml = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${template}
</body>
</html>
  `;


  fs.writeFileAsync(path.join(__dirname,'/teams.html'), finalhtml)
}

const addMember = () => {
  inquirer.prompt(questionsAdd).then((answer) => {
    switch (answer.choice) {
      case "Manager":
        createManager();
        break;
      case "Intern":
        createIntern();
        break;
      case "Engineer":
        createEngineer();
        break;
      default:
        endGame();
        break;
    }
  });
};


addMember();


// How can I make multiple containers for each employee?
// How do I add employee specific information?

// const init = () => {
//   promptUser()
//     .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();