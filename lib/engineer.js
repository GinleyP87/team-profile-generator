
const Employee = require("./employee")

class Engineer extends Employee {
    constructor(id, employeeName, email, ghName) {
        super(id, employeeName, email)
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