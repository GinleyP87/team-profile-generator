const Engineer = require("../lib/Engineer.js");

test("This should set GitHUb account with constructor function", () => {
    const ghName = "ghName";
    const example = new Engineer(6, "Hal Jordan", "example@fake.com", ghName);

    expect(example.ghName).toBe(ghName);
});

test("This function should display JobTitle as \"Engineer\"", () => {
    const jobTitle = "Engineer";
    const example = new Engineer(6, "Hal Jordan", "example@fake.com", "GitHubUser");
    
    expect(example.acquireJobTitle()).toBe(jobTitle);
});

test("This should get GitHub username with acquireGithubName function", () => {
    const ghName = "ghName";
    const example = new Engineer(6, "Hal Jordan", "example@fake.com", ghName);
    
    expect(example.acquireGithubName()).toBe(ghName);
});