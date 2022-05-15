const Reader = require("./../../lib/utils/Reader");

describe("Test to see if reader is working", () => {
    test("if reader is reading duh", () => {
        const plastics = Reader.readJsonFile("./plastics.json");
        expect(plastics.length).toBe(7);
    });
});