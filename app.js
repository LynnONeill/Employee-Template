const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


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
                console.log("error catch 1");
            })

    // push new hire to newHire array //
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
                const newManager = new Manager(name, id, email, role, officeNumber);
                teamRoster.managers.push(newManager);
                console.log(teamRoster);
            })

            .catch(function (error) {
                console.log(error);
                console.log("error catch 2");
            });
    }

    // Engineer specific questions. ///////////////////////////////////////////////
    if (role == "Engineer") {
        const engineerQuestions = [
            {
                type: "input",
                message: "Enter engineer's GitHub Username",
                name: "username",
            }
        ]
        await inquirer.prompt(engineerQuestions)
            .then(function (answers) {
                let username = answers.username;
                console.log("user name is " + username);
                let newEngineer = new Engineer(name, id, email, role, username);
                teamRoster.engineers.push(newEngineer);
            })

            .catch(function (error) {
                console.log(error);
                console.log("error catch 3");
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
                let newIntern = new Intern(name, id, email, role, school);
                teamRoster.interns.push(newIntern);
            })

            .catch(function (error) {
                console.log(error);
                console.log("error catch 4");
            });



    };

    checkRoster();


}

// Add another employee prompt. /////////////////////////////////////////////////


function checkRoster() {
    console.log(teamRoster);
}
