class Employee {
    constructor(id, employeeName, email) {
        this.id = id;
        this.employeeName = employeeName;
        this.jobTitle = "Employee";
        this.email = email;
    };

    acquireId() {
        return this.id;
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