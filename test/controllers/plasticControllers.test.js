const plasticController = require("./../../lib/controllers/plasticController");

describe("Test connection between routes", () => {
    test("1) to get list", () => {
        const plastics = plasticController.getWholePlasticsElements();
        expect(plastics).not.toBeUndefined();
    });
    test("2) get plastics recyclables", () => {
        const validation = plasticController.getValidation(false);
        expect(validation).toMatchObject(
            [
                'tereftalato de polietileno',
                'cloruro de polivinilo',
                'poliestireno',
                'others'
              ]
        );
    });
});