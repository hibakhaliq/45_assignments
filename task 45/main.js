function storeCarInfo(manufacturer, modelName, ...extraOption) {
    //Initializes a car object with  manufacturer and model
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
let answer = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answer);
export {};
