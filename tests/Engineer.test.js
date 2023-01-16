const Engineer = require("../lib/Engineer");
const engineer = new Engineer('test', 123, 'test@email.com', 'username')

test("Can set GitHub username from constructor value", () => {
  expect(engineer.githubUsername).toBe('username');
});

test("Can get name from getGithubUsername() function", () => {
  expect(engineer.getGithubUsername()).toBe("username");
});

test("Can get job title from getTitle() function", () => {
  expect(engineer.getTitle()).toBe("Engineer");
});