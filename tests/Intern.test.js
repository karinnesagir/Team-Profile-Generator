const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {

    it("should get the constructor values for the Employee object", () => {

      const Intern = new Intern("Bob", 12345, "bob@gmail.com", "bobgithub")
      expect(Intern.name).toEqual("Bob");
      expect(Intern.id).toEqual(12345);
      expect(Intern.email).toEqual("bob@gmail.com");
      expect(Intern.githubUsername).toEqual("bobgithub");

    });

    it("should get the employee's name from the getGithubUsername() method", () => {
      expect(getGithubUsername()).toBe("bobgithub");
    });

  });
});