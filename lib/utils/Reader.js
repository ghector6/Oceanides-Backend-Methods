const fs = require("fs");

class Reader{

    static readJsonFile(path) {
        const rawData = fs.readFileSync(path);
        const plastics = JSON.parse(rawData);
        return plastics;
    }
}

module.exports = Reader;