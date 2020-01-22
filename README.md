# Employee-Template

Introduction: This is a command-line application that dynamically generates an html file containing specified information for a software engineering team. The application will be invoked with the following command:

node app.js

For each employee, the user will be promted to enter the employee's name, ID number, email address and their role with the company (manager, engineer, or intern).  After the employee's role has been selected, the user will then be prompted to answer one more role-specific question:

For managers: they will be asked for their office number
For engineers: they will be asked to provide the GitHub user id.
For interns: they will be asked to provide that team-member's school.

The html document (team.html - located in the output folder) will contain the following:

Team member's:
name
role
email address
employee id

Managers:
office number

Engineers:
GitHub user id

Interns:
current school

Technology: This application utilizes: html css bootstrap font awesome, javascript, Node:
npm inquirer, npm jest.

Project Status: This project is complete

