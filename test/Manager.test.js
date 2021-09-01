const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager")

it("Testing Manager OBj", () => {
    const mockManager = new Manager("dog","1","dog@dog.com","kennel");

    expect(mockManager.getRole()).toBe("Manager");
    expect(mockManager.getOfficeNumber()).toBe("kennel")
});