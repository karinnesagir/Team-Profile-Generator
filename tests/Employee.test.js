const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {

    it("should get the constructor values for the Employee object", () => {

      const Employee = new Employee("Bob", 12345, "bob@gmail.com", "bobgithub")
      expect(Employee.name).toEqual("Bob");
      expect(Employee.id).toEqual(12345);
      expect(Employee.email).toEqual("bob@gmail.com");

    });

    it("should get the employee's name from the getName() method", () => {
      expect(getName()).toBe("Bob");
    });

    it("should get the employee's id from the getId() method", () => {
        expect(getId()).toBe("12345");
    });

    it("should get the employee's name from the getEmail() method", () => {
        expect(getEmail()).toBe("Bob");
    });

  });
});
