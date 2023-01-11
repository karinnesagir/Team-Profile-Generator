const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
  
      it("should get the constructor values for the Engineer object", () => {
  
        const Engineer = new Engineer("Bob", 12345, "bob@gmail.com", 555)
        expect(Engineer.name).toEqual("Bob");
        expect(Engineer.id).toEqual(12345);
        expect(Engineer.email).toEqual("bob@gmail.com");
        expect(Engineer.githubUsername).toEqual(555);
  
      });
  
      it("should get the engineer's id from the getGithubUsername() method", () => {
          expect(getGithubUsername()).toBe("555");
      });
  
    });
  });