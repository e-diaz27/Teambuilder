const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer")

it("Testing Engineer OBj", () => {
    const mockEngineer = new Engineer("dog","1","dog@dog.com","dog");

    expect(mockEngineer.getRole()).toBe("Engineer");
    expect(mockEngineer.getGithub()).toBe("dog")
});