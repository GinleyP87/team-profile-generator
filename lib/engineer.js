
const Employee = require("./employee.js")

class Engineer extends Employee {
    constructor(idNum, employeeName, email, ghName) {
        super(idNum, employeeName, email)
        this.ghName = ghName;
        this.jobTitle = "Engineer"
    }

    acquireGithubName() {
        return this.ghName;
    }

    acquireJobTitle() {
        return this.jobTitle;
    }
}

module.exports = Engineer