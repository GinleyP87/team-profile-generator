class Employee {
    constructor(idNum, employeeName, email) {
        this.idNum = idNum;
        this.employeeName = employeeName;
        this.jobTitle = "Employee";
        this.email = email;
    };

    acquireIdNum() {
        return this.idNum;
    };

    acquireName() {
        return this.employeeName;
    };

    acquireEmail() {
        return this.email;
    };

    acquireJobTitle() {
        return this.jobTitle;
    };
}


module.exports = Employee;