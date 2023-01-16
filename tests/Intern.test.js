const Intern = require("../lib/Intern");
const intern = new Intern('test', 123, 'test@email.com', 'schoolName');

test("Can set school name from constructor value", () => {
  expect(intern.school).toBe('schoolName');
});

test("Can get name from getSchool() function", () => {
  expect(intern.getSchool()).toBe("schoolName");
});

test("Can get job title from getTitle() function", () => {
  expect(intern.getTitle()).toBe("Intern");
});