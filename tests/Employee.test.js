const Employee = require("../lib/Employee");
const employee = new Employee('testName', 123, 'test@email.com');

test("Can set name from constructor value", () => {
  expect(employee.name).toBe('testName');
});

test("Can set id from constructor value", () => {
  expect(employee.id).toBe(123);
});

test("Can set email address from constructor value", () => {
  expect(employee.email).toBe('test@email.com');
});

test("Can get name from getName() function", () => {
  expect(employee.getName()).toBe("testName");
});

test("Can get id from getId() function", () => {
  expect(employee.getId()).toBe(123);
});

test("Can get email address from getEmail() function", () => {
  expect(employee.getEmail()).toBe("test@email.com");
});

test("Can get job title from getTitle() function", () => {
  expect(employee.getTitle()).toBe("Employee");
});