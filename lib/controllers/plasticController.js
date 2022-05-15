const Reader = require("./../utils/Reader");
const plasticServices = require("./../services/plasticServices");

class plasticController {
    
    static getWholePlasticsElements (){
        const wholeElements = Reader.readJsonFile("./plastics.json");
        return plasticServices.printAllPlastics(wholeElements);

    }
    static getValidation(status) {
        const elements = Reader.readJsonFile("./plastics.json");
        return plasticServices.validationRecyclable(elements, status);
    }

    static getYeardDeg(){
        const plasticDeg = Reader.readJsonFile("./plastics.json");
        return plasticServices.yearsDegraded(plasticDeg)

    }




}

module.exports = plasticController;