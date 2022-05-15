const Reader = require("./../utils/Reader")
const plasticServices = require("./../services/plasticServices")

class plasticController {
    
    static getWholePlasticsElements (){
        const wholeElements = Reader.readJsonFile("./plastics.json")
         return plasticServices.printAllPlastics(wholeElements);

    }




}

module.exports = plasticController