// How do I write a test? I'm still lost on this.

const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee")

it("Testing Employee OBj", () => {
    const mockEmployee = new Employee("dog","1","dog@dog.com");

    expect(mockEmployee.getName()).toBe("dog");
    expect(mockEmployee.getId()).toBe("1");
    expect(mockEmployee.getEmail()).toBe("dog@dog.com");
    expect(mockEmployee.getRole()).toBe("Employee");
});