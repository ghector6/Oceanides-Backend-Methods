class plasticServices{

    static printAllPlastics(plastics){
        const plasticsInJson = plastics.map((plastic) => plastic);
        return plasticsInJson;
    }
}

module.exports = plasticServices;