const Employee = require("./employee")

class Intern extends Employee {
    constructor(id , employeeName,  email, schoolName){
        super(id, employeeName,  email)
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