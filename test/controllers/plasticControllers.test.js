const plasticController = require("./../../lib/controllers/plasticController");

describe("Test connection between routes", () => {
    test("1) to get list", () => {
        const plastics = plasticController.getWholePlasticsElements();
        expect(plastics).not.toBeUndefined();
    });
});