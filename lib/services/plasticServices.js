class plasticServices{

    static printAllPlastics(plastics){
        const plasticsInJson = plastics.map((plastic) => plastic);
        return plasticsInJson;
    }
        static validationRecyclable(plastics, status){
        const plasticRecyclable = plastics.filter((plastic) => plastic.recyclable === status);
        const plasticsWithValidation = plasticRecyclable.map((plastic) => plastic.name );
        return plasticsWithValidation;
    }
}

module.exports = plasticServices;
