
const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

test("This should set office number from constructor function", () => {
  const officeNumber = 14;
  const example = new Manager(4, "Oliver Queen", "example@fake.com", officeNumber);

  expect(example.officeNumber).toBe(officeNumber);
});

test("This function should display jobTitle as \"Manager\"", () => {
  const jobTitle = "Manager";
  const example = new Manager(4, "Oliver Queen", "example@fake.com", 14, jobTitle);

  expect(example.acquireJobTitle()).toBe(jobTitle);
});

test("This should get the office number from acquireOfficeNumber function", () => {
  const officeNumber = 14;
  const example = new Manager(4, "Oliver Queen", "example@fake.com", officeNumber);

  expect(example.acquireOfficeNumber()).toBe(officeNumber);
});