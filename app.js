const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const create = require("./createHTML");

const teamRoster = {
    allEmployees: [],
    managers: [],
    engineers: [],
    interns: [],
};

getEmployeeInfo();

async function getEmployeeInfo() {
    // Basic Employee Questions ////////////////////////////////////////////
    let { name, id, email, role } =
        await inquirer.prompt([
            {
                type: "input",
                message: "Enter employee name.",
                name: "name",
            },
            {
                type: "input",
                message: "Enter employee's ID.",
                name: "id",
            },
            {
                type: "input",
                message: "Enter employee's email address.",
                name: "email",
            },
            {
                type: "list",
                message: "Select employee role.",
                choices: ["Manager", "Engineer", "Intern"],
                name: "role",
            }
        ])
            .catch(function (error) {
                console.log(error);
            })

    // push new hire to teamRoster array ////////////////////////////////////////
    let newHire = new Employee(name, id, email, role);
    teamRoster.allEmployees.push(newHire);
    console.log(teamRoster);

    // Manager specific questions.////////////////////////////////////////////////
    if (role == "Manager") {
        const managerQuestions = [
            {
                type: "input",
                message: "Enter office number",
                name: "officeNumber",
            }
        ]
        await inquirer.prompt(managerQuestions)
            .then(function (answers) {
                const officeNumber = answers.officeNumber;
                console.log("office number is " + officeNumber);
                const newManager = new Manager(name, id, email, officeNumber);
                teamRoster.managers.push(newManager);
                console.log(teamRoster);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Engineer specific questions. ///////////////////////////////////////////////
    if (role == "Engineer") {
        const engineerQuestions = [
            {
                type: "input",
                message: "Enter engineer's GitHub Username",
                name: "github",
            }
        ]
        await inquirer.prompt(engineerQuestions)
            .then(function (answers) {
                const github = answers.github;
                console.log("user name is " + github);
                const newEngineer = new Engineer(name, id, email, github);
                teamRoster.engineers.push(newEngineer);
                console.log(teamRoster);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Intern specific questions. ////////////////////////////////////////////////
    if (role == "Intern") {
        const internQuestions = [
            {
                type: "input",
                message: "Enter intern's school.",
                name: "school",
            }
        ]
        await inquirer.prompt(internQuestions)
            .then(function (answers) {
                let school = answers.school;
                console.log(school + " Successfully added");
                let newIntern = new Intern(name, id, email, school);
                teamRoster.interns.push(newIntern);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // Add another employee prompt. /////////////////////////////////////////////////
    const addAnotherEmployee = [
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"],
            name: "empAdd",
        }
    ]
    await inquirer.prompt(addAnotherEmployee)
        .then(function (answers) {
            let empAdd = answers.empAdd;
            console.log(empAdd + "this is the answer to adding employee");
            if (empAdd == "no") {
                addEmp = false;
                console.log("stop here and build html");
                buildHTML();
            } else {
                addEmp = true;
                getEmployeeInfo();
            }
        })
        .catch(function (error) {
            console.log(error);
        });


    checkRoster();
    console.log("This is our test " + teamRoster);
}

// Build out HTML file ////////////////////////////////////////////////////////////////////////
function buildHTML() {

    let HTML = create.createFileHead();

    let header = create.createHeader();

    HTML += header;

    teamRoster.managers.forEach(element => {
        console.log(JSON.stringify(element));
            let managerCard = create.createManager(element);
            HTML += managerCard;
    });

    teamRoster.interns.forEach(element => {
        console.log(JSON.stringify(element));
            let internCard = create.createIntern(element);
            HTML += internCard;
    });

    teamRoster.engineers.forEach(element => {
        console.log(JSON.stringify("for each test . " + element));
        let engineerCard = create.createEngineer(element);
        HTML = HTML + engineerCard;
    })

        // Create new HTML file with employee information.
        
            fs.writeFile('./output/team.html', HTML, 'utf8', (err) => {
                if (err) throw err;
                console.log("Team Roster has been created!!!");
            });
        
}


function checkRoster() {
    console.log(teamRoster);
}
