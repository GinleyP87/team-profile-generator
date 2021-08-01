const Employee = require("../lib/Employee.js");

test("This should get the Employee object", () => {
    const example = new Employee();

    expect(typeof(example)).toBe("object");
});

test("This should get the id with the constructor function", () => {
    const ranVal = 4;
    const example = new Employee(ranVal);

    expect(example.id).toBe(ranVal);
});

test("This should get the employee's name with the constructor function", () => {
    const employeeName = "Barry Allen";
    const example = new Employee(4, employeeName);

    expect(example.employeeName).toBe(employeeName);
});

test("This should get the email address through the constructor argument", () => {
    const email = "example@fake.com";
    const example = new Employee(4, "Barry Allen", email);

    expect(example.email).toBe(email);
});

test("This should get the id from getId function", () => {
    const ranVal = 4;
    const example = new Employee(ranVal);

    expect(example.acquireId()).toBe(ranVal);
});

test("This should get name with getName function", () => {
    const employeeName = "Barry Allen";
    const example = new Employee(4, employeeName);

    expect(example.acquireName()).toBe(employeeName);
});

test("This should get the email address from getEmail function", () => {
    const email = "test@test.com";
    const example = new Employee(4, "Barry Allen", email);

    expect(example.acquireEmail()).toBe(email);
});

test("This getJobTitle function should display \"Employee\"", () => {
    const jobTitle = "Employee";
    const example = new Employee(4, "Barry Allen", "example@fake.com");

    expect(example.acquireJobTitle()).toBe(jobTitle);
});