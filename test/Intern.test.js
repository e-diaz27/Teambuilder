const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern")

it("Testing Intern OBj", () => {
    const mockIntern = new Intern("dog","1","dog@dog.com","dog university");

    expect(mockIntern.getRole()).toBe("Intern");
    expect(mockIntern.getSchool()).toBe("dog university")
});