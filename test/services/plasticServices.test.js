const plasticServices = require("./../../lib/services/plasticServices");
const Reader = require("./../../lib/utils/Reader");

describe("Test to see if my methods in services are working", () => {
    test(" 1) to see if it prints all plastic ifngo ", () => {
        const plastics = Reader.readJsonFile("./plastics.json");
        const wholeList = plasticServices.printAllPlastics(plastics);
        expect(wholeList.length).toBe(7);
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