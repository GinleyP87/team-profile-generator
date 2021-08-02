//required variables

const inquirer = require("inquirer");
const fs = require("fs");
const stylesheet = require("./temp/styletemp.js")

const Employee = require("./lib/employee.js")
const Engineer = require("./lib/engineer.js")
const Manager = require("./lib/manager.js")
const Intern = require("./lib/intern.js")

let workTeamArray = [];

// this function starts the prompt

function startPrompt() {
    inquirer.prompt([

        {

            name: "workteamname",
            message: "Please create your team's name"
            
        }
    ])
        .then(function(data){
            const workTeamName = data.workteamname
            workTeamArray.push(workTeamName)
            addManager();
        })

    
}

//this function prompts the manager questions

function addManager() {
    inquirer.prompt([

        {

            name: "employeeName", 
            message: "What is the name of your team's manager?"
        
        },

        {

            name: "email",
            message: "What is the e-mail address of your team's manager?"
            
        },

        {

            name: "officeNumber",
            type: "number",
            message: "What is the office number of your team's manager?"
            
        },

    ])

        .then(function (data) {

            const employeeName = data.employeeName;
            const idNum = 1;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const newEmployee = new Manager(idNum, employeeName, email, officeNumber);
            workTeamArray.push(newEmployee);
            addEmployee();
        
        });

}

//this function  prompts whether you want to add another employee or not

function addEmployee() {
    inquirer.prompt([

        {

            name: "addEmployeeData",
            type: "list",
            message: "Do you want to add more employees to your team?",
            choices: ["Yes, I'd like to add an engineer", "Yes, I'd like to add an intern", "No thank you, my team is finished."]
            
        }

    ])

        .then(function (data) {

            switch (data.addEmployeeData) {

                case "Yes, I'd like to add an engineer":
                    addEngineer();
                    break;

                case "Yes, I'd like to add an intern":
                    addIntern();
                    break;

                case "No thank you, my team is finished.":
                    generateTeam();
                    break;

            }
        });
}

//this function add an engineer to the team array

function addEngineer() {
    inquirer.prompt([

        {

            name: "employeeName",
            message: "What is the name of this engineer?"
            
        },

        {

            name: "email",
            message: "What is the email address of this engineer?"
            
        },

        {

            name: "ghName",
            message: "What is the name of this engineer's Github page?",
            
        }

    ])

        .then(function (data) {
            const idNum = workTeamArray.length + 1
            const employeeName = data.employeeName
            const email = data.email
            const ghName = data.ghName
            const newEmployee = new Engineer(idNum, employeeName, email, ghName)
            workTeamArray.push(newEmployee)
            addEmployee()
        });

};

//this function aadds an intern to the team array

function addIntern() {
    inquirer.prompt([

        {

            name: "employeeName",
            message: "What is the name of this Intern?"

        },

        {

            name: "email",
            message: "What is the email address of this intern?"
            
        },

        {

            name: "schoolName",
            message: "Where does this intern go to school?"
            
        }

    ])

        .then(function (data) {
            const employeeName = data.employeeName
            const idNum = workTeamArray.length + 1
            const email = data.email
            const schoolName = data.schoolName
            const newEmployee = new Intern(idNum, employeeName, email, schoolName)
            workTeamArray.push(newEmployee)
            addEmployee()

        });

};

function generateTeam() {
    console.log("You're Work Team Profile has been generated. Please navigate to the generated-team-profile folder to view your page.")

    const skeletonArray = []
    const upperSkeleton = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${workTeamArray[0]}</title>
    <style> ${stylesheet} </style>
</head>

<header>
    <h1>${workTeamArray[0]}</h1>
</header>
<body>
    <div class="card-deck">
    `
    skeletonArray.push(upperSkeleton);

    for (let i = 1; i < workTeamArray.length; i++) {
        let object = `
        <div class="employee-card">
            <div class="team-header">
                <h2>${workTeamArray[i].employeeName}</h2>
                <h2>${workTeamArray[i].jobTitle}</h2>
            </div>
            <div class="team-input">
                <p>Employee ID: ${workTeamArray[i].idNum}</p>
                <p>Email: <a href="mailto:${workTeamArray[i].email}">${workTeamArray[i].email}</a>></p>
        `

        if (workTeamArray[i].officeNumber) {
            object += `
            <p>Office Num: ${workTeamArray[i].officeNumber}</p>
            `
        }

        if (workTeamArray[i].ghName) {
            object += `
            <p>GitHub: <a href="https://github.com/${workTeamArray[i].ghName}">${workTeamArray[i].ghName}</a></p>
            `
        }

        if (workTeamArray[i].schoolName) {
            object += `
            <p>School: ${workTeamArray[i].schoolName}</p>
            `
        }

        object += `
        </div>
        </div>
        `
        skeletonArray.push(object)

    }

    const lowerSkeleton = `
    </div>
    </body>
    <footer>
        <p>App created by GinleyP87</p>
    </footer>

    </html>

    `
    skeletonArray.push(lowerSkeleton);

    fs.writeFile(`./generated-team-profile/${workTeamArray[0]}.html`, skeletonArray.join(""), function (err) {
        
    })
}

//this function starts the whole shebang
startPrompt()