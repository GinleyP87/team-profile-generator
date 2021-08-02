
const Employee = require("./employee.js")


class Manager extends Employee {
    constructor (idNum, employeeName, email, officeNumber){
        super (idNum, employeeName, email)
        this.officeNumber = officeNumber
        this.jobTitle = "Manager"
    }


    acquireJobTitle(){
        return this.jobTitle;
    }

    acquireOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager