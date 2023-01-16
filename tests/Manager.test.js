const Manager = require("../lib/Manager");
const manager = new Manager('test', 123, 'test@email.com', 321);

test("Can set office number from constructor value", () => {
  expect(manager.officeNumber).toBe(321);
});

test("Can get name from getOfficeNumber() function", () => {
  expect(manager.getOfficeNumber()).toBe(321);
});

test("Can get job title from getTitle() function", () => {
  expect(manager.getTitle()).toBe("Manager");
});