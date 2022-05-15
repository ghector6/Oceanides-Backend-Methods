const plasticServices = require("./../../lib/services/plasticServices")
const Reader = require("./../../lib/utils/Reader")

describe("Test to see if my methods in services are working", () => {
    test(" 1) to see if it prints all plastic ifngo ", () => {
        const plastics = Reader.readJsonFile("./plastics.json")
        const wholeList = plasticServices.printAllPlastics(plastics)
        expect(wholeList.length).toBe(7);
    })
})