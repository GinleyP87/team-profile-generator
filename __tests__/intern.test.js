const Intern = require("../lib/Intern.js");

test("This should set school through the constructor function", () => {
    const schoolName = "Case Western Reserve";
    const example = new Intern(7, "Arthur Curry", "example@fake.com", schoolName);
    
    expect(example.schoolName).toBe(schoolName);
});

test("This function should display jobTitle as \"Intern\"", () => {
    const jobTitle = "Intern";
    const example = new Intern(7, "Arthur Curry", "example@fake.com", "Case Western Reserve");
    
    expect(example.acquireJobTitle()).toBe(jobTitle);
});

test("This should get school through the acquireSchool function", () => {
    const schoolName = "Case Western Reserve";
    const example = new Intern(7, "Arthur Curry", "example@fake.com", schoolName);
    
    expect(example.acquireSchool()).toBe(schoolName);
});