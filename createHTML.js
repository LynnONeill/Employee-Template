const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function createFileHead() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Roster</title>
        <link rel="stylesheet" href="../assets/style/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/style/style.css">
        <script src="./assets/scripts/script.js"></script>
    </head>`
}

function createHeader() {
    return `<nav class="navbar navbar-light bg-info">
    <span class="navbar-brand mb-0 h1 text-white mx-auto">My Team</span>
  </nav> `
}

function createManager(Manager) {
    return `<div id="manager" class="card float-left m-4" style="width: 18rem;">
    <div class="card-body bg-info text-white">
      <h5 class="card-title">${Manager.name}</h5>
      <p class="card-text"><span><i class="fas fa-mug-hot p-2"></i></span>Manager</p>
    </div>
    <ul class="list-group list-group-flush p-4">
      <li class="list-group-item">ID: ${Manager.id}</li>
      <li class="list-group-item">Email: ${Manager.email}</li>
      <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
    </ul>
    </div>
  </div>`
}

function createIntern(Intern) {
    return `<div id="intern" class="card float-left m-4" style="width: 18rem;">
    <div class="card-body bg-info text-white">
      <h5 class="card-title">${Intern.name}</h5>
      <p class="card-text"><span><i class="fas fa-user-graduate p-2"></i></span>Intern</p>
    </div>
    <ul class="list-group list-group-flush p-4">
      <li class="list-group-item">ID: ${Intern.id}</li>
      <li class="list-group-item">Email: ${Intern.email}</li>
      <li class="list-group-item">School: ${Intern.school}</li>
    </ul>
    </div>
  </div>`
}

function createEngineer(Engineer) {
    return `<div id="engineer" class="card float-left m-4" style="width: 18rem;">
    <div class="card-body bg-info text-white">
      <h5 class="card-title">${Engineer.name}</h5>
      <p class="card-text"><span><i class="fab fa-github p-2"></i></span>Intern</p>
    </div>
    <ul class="list-group list-group-flush p-4">
      <li class="list-group-item">ID: ${Engineer.id}</li>
      <li class="list-group-item">Email: ${Engineer.email}</li>
      <li class="list-group-item">GitHub User ID: ${Intern.github}</li>
    </ul>
    </div>
  </div>`
}

module.exports = {
    createFileHead: createFileHead,
    createHeader: createHeader,
    createManager: createManager,
    createIntern: createIntern,
    createEngineer: createEngineer,
}