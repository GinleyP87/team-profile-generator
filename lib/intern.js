const Employee = require("./employee.js")

class Intern extends Employee {
    constructor(idNum, employeeName,  email, schoolName){
        super(idNum, employeeName,  email)
        this.schoolName = schoolName;
        this.jobTitle = "Intern";
    }

    acquireSchool(){
        return this.schoolName;
    }

    acquireJobTitle(){
        return this.jobTitle;
    }
}

module.exports = Intern