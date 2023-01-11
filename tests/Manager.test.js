const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
  
      it("should get the constructor values for the Manager object", () => {
  
        const Manager = new Manager("Bob", 12345, "bob@gmail.com", 555)
        expect(Manager.name).toEqual("Bob");
        expect(Manager.id).toEqual(12345);
        expect(Manager.email).toEqual("bob@gmail.com");
        expect(Manager.officeNumber).toEqual(555);
  
      });
  
      it("should get the manager's id from the getOfficeNumber() method", () => {
          expect(getOfficeNumber()).toBe("555");
      });
  
    });
  });